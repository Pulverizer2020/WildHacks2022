// micro provides http helpers
const { createError, json, send } = require('micro');
// microrouter provides http server routing
const { router, get, post } = require('microrouter');
// serve-handler serves static assets
const staticHandler = require('serve-handler');
// async-retry will retry failed API requests
const retry = require('async-retry');

// logger gives us insight into what's happening
const logger = require('./server/logger');
// schema validates incoming requests
const {
  validatePaymentPayload,
  validateCreateCardPayload,
} = require('./server/schema');
// square provides the API client and error types
const { ApiError, client: square } = require('./server/square');
const { nanoid } = require('nanoid');
//const { cancelPaymentResponseSchema } = require('square/dist/models/cancelPaymentResponse');

var existingId = ""
var currentVersion = -1


async function createPayment(req, res) {
  console.log("creating Payment...")

  const payload = await json(req);
  logger.debug(JSON.stringify(payload));
  // We validate the payload for specific fields. You may disable this feature
  // if you would prefer to handle payload validation on your own.
  if (!validatePaymentPayload(payload)) {
    throw createError(400, 'Bad Request');
  }
  await retry(async (bail, attempt) => {
    try {
      logger.debug('Creating payment', { attempt });

      const idempotencyKey = payload.idempotencyKey || nanoid();
      const payment = {
        idempotencyKey,
        locationId: payload.locationId,
        sourceId: payload.sourceId,
        // While it's tempting to pass this data from the client
        // Doing so allows bad actor to modify these values
        // Instead, leverage Orders to create an order on the server
        // and pass the Order ID to createPayment rather than raw amounts
        // See Orders documentation: https://developer.squareup.com/docs/orders-api/what-it-does
        amountMoney: {
          // the expected amount is in cents, meaning this is $1.00.
          amount: '100',
          // If you are a non-US account, you must change the currency to match the country in which
          // you are accepting the payment.
          currency: 'USD',
        },
      };

      if (payload.customerId) {
        payment.customerId = payload.customerId;
      }

      // VerificationDetails is part of Secure Card Authentication.
      // This part of the payload is highly recommended (and required for some countries)
      // for 'unauthenticated' payment methods like Cards.
      if (payload.verificationToken) {
        payment.verificationToken = payload.verificationToken;
      }

      const { result, statusCode } = await square.paymentsApi.createPayment(
        payment
      );

      logger.info('Payment succeeded!', { result, statusCode });

      send(res, statusCode, {
        success: true,
        payment: {
          id: result.payment.id,
          status: result.payment.status,
          receiptUrl: result.payment.receiptUrl,
          orderId: result.payment.orderId,
        },
      });
    } catch (ex) {
      if (ex instanceof ApiError) {
        // likely an error in the request. don't retry
        logger.error(ex.errors);
        bail(ex);
      } else {
        // IDEA: send to error reporting service
        logger.error(`Error creating payment on attempt ${attempt}: ${ex}`);
        throw ex; // to attempt retry
      }
    }
  });
}

async function createOrUpdateOrder(req, res) {
  currentVersion = currentVersion + 1
  console.log("current version is");
  console.log(currentVersion);
  console.log("the existingID currently is");
  console.log(existingId);
  
  if(existingId == ""){

    console.log("creating Order...")

    const payload = await json(req);
    
    logger.debug(JSON.stringify(payload));
    
    try {
      const idKey = payload.idempotencyKey || nanoid();
      console.log(idKey)

      const response = await square.ordersApi.createOrder({
        order: {
          locationId: payload.locationId,
          lineItems: [{
              name: payload.lineItems[0].name,
              quantity: '1',
              basePriceMoney: {
                amount: parseInt(payload.lineItems[0].basePriceMoney.amount) * 100,
                currency: payload.lineItems[0].basePriceMoney.currency
              }}]},
        idempotencyKey: idKey
      });
      
      console.log(response); // need to find out what is .result ?
      console.log("this is the body of response");
      responseBody = JSON.parse(response.body);
      console.log(responseBody)
      statusCode = response.statusCode;
      
      existingId = response.result.order.id;
      console.log("new existingID")
      console.log(existingId)
      send(res, statusCode, {
        success: true,
        order: {
          id: response.result.order.id,
          state: response.result.order.state,
        },
      });
      
    } catch(error) {
      console.log(error);
      //bail(error);
    }
  } else {
    console.log("Update Order...")

    const payload = await json(req);
    
    logger.debug(JSON.stringify(payload));
    
    try {
      const idKey = payload.idempotencyKey || nanoid();
      console.log(idKey)

      const response = await square.ordersApi.updateOrder(existingId,
         //Values here are not getting accepted anymore and IDK why
        {
          order: {
            locationId: payload.locationId,
            lineItems: [{
              name: payload.lineItems[0].name,
              quantity: '1',
              basePriceMoney: {
                amount: parseInt(payload.lineItems[0].basePriceMoney.amount) * 100,
                currency: payload.lineItems[0].basePriceMoney.currency
              }}],
              version: currentVersion
            },
          idempotencyKey: idKey
        }
      );
      console.log("Update to order has gone through!");
      console.log(response); // need to find out what is .result ?
      statusCode = response.statusCode;
      
      existingId = response.result.order.id;

      send(res, statusCode, {
        success: true,
        order: {
          id: response.result.order.id,
          state: response.result.order.state,
        }
      });
      
    } catch(error) {
      console.log(error);
      //bail(error);
    }
  }
}

async function checkout(req, res) {
  console.log("the existingID currently is")
  console.log(existingId)
  logger.info("checkout being run")
  if(existingId == ""){
    logger.info("No Order has been made yet")
    
    send(res, 200, {
      success: false
    });

  } else {
    const payload = await json(req);
    logger.debug(JSON.stringify(payload));
    
    try {
      const orderResponse = await square.ordersApi.retrieveOrder(existingId);
      
      console.log(orderResponse); // need to find out what is .result ?
      console.log("this is the orderResponseBody.order from the response");
      orderResponseBody = JSON.parse(orderResponse.body);
      console.log(orderResponseBody.order);
      statusCode = orderResponse.statusCode;

      
      const idKeyCheckout = payload.idempotencyKey || nanoid();
      console.log(idKeyCheckout)

      const idKeyOrder = payload.idempotencyKey || nanoid();
      console.log(idKeyOrder)
      
      console.log("line items...")
      console.log(orderResponseBody.order.line_items[0].base_price_money)
      var savedLineItems = orderResponseBody.order.line_items
      console.log(savedLineItems)
      console.log("checkout Response running...")
      savedLineItemsStringified = JSON.stringify(savedLineItems).replaceAll('base_price_money','basePriceMoney')
      savedLineItemsModified = JSON.parse(savedLineItemsStringified)
      console.log("saved line items modified:")
      console.log(savedLineItemsModified)
      /*
      var singleItem = 
        {
          quantity: savedLineItems[0].quantity,
          name: savedLineItems[0].name,
          basePriceMoney: {
            amount: 1000, 
            currency: 'USD'} //savedLineItems[0].base_price_money
        }
        */
      
      const checkoutResponse = await square.checkoutApi.createCheckout('L4YNZW1FPAWWG',
      {
        idempotencyKey: idKeyCheckout,
        order: {
          order: {
            locationId: 'L4YNZW1FPAWWG',
            lineItems: savedLineItemsModified //missing required parameters for some reason
          },
          idempotencyKey: idKeyOrder
        }
      });
      
      /*
      try {
        const response = await client.checkoutApi.createPaymentLink({
          idempotencyKey: idKeyCheckout,
          order: {
            locationId: 'L4YNZW1FPAWWG',
            lineItems: [
              {
                name: '60,000 mile maintenance',
                quantity: '1',
                note: '1st line item note',
                basePriceMoney: {
                  amount: 30000,
                  currency: 'USD'
                }
              }
            ]
          }
        });

        console.log(response.result);
      } catch(error) {
        console.log(error);
      }
      */
      

      
      
      console.log("this is the checkout response");
      checkoutId = checkoutResponse['result']['checkout']['id']; // need to find out what is .result ?
      checkoutURL = checkoutResponse['result']['checkout']['checkoutPageUrl'];
      
      console.log("ok we did the thing")
        
      send(res, 200, {
        success: true,
        checkoutId: checkoutId,
        checkoutURL: checkoutURL
      });
      
    } catch(error) {
      console.log(error);
      //bail(error);
    }}};





async function storeCard(req, res) {
  const payload = await json(req);

  if (!validateCreateCardPayload(payload)) {
    throw createError(400, 'Bad Request');
  }
  await retry(async (bail, attempt) => {
    try {
      logger.debug('Storing card', { attempt });

      const idempotencyKey = payload.idempotencyKey || nanoid();
      const cardReq = {
        idempotencyKey,
        sourceId: payload.sourceId,
        card: {
          customerId: payload.customerId,
        },
      };

      if (payload.verificationToken) {
        cardReq.verificationToken = payload.verificationToken;
      }

      const { result, statusCode } = await square.cardsApi.createCard(cardReq);

      logger.info('Store Card succeeded!', { result, statusCode });

      // remove 64-bit value from response
      delete result.card.expMonth;
      delete result.card.expYear;

      send(res, statusCode, {
        success: true,
        card: result.card,
      });
    } catch (ex) {
      if (ex instanceof ApiError) {
        // likely an error in the request. don't retry
        logger.error(ex.errors);
        bail(ex);
      } else {
        // IDEA: send to error reporting service
        logger.error(
          `Error creating card-on-file on attempt ${attempt}: ${ex}`
        );
        throw ex; // to attempt retry
      }
    }
  });
}

// serve static files like index.html and favicon.ico from public/ directory
async function serveStatic(req, res) {
  logger.debug('Handling request', req.path);
  await staticHandler(req, res, {
    public: 'frontend/my-app/public',
  });
}

// export routes to be served by micro
module.exports = router(
  post('/checkout', checkout),
  post('/payment', createPayment),
  post('/orderItem',createOrUpdateOrder),
  post('/card', storeCard),
  get('/*', serveStatic)
);
