import { ApiResponse, RequestOptions } from '../core';
import { CreateCheckoutRequest } from '../models/createCheckoutRequest';
import { CreateCheckoutResponse } from '../models/createCheckoutResponse';
import { BaseApi } from './baseApi';
export declare class CheckoutApi extends BaseApi {
    /**
     * Links a `checkoutId` to a `checkout_page_url` that customers are
     * directed to in order to provide their payment information using a
     * payment processing workflow hosted on connect.squareup.com.
     *
     * @param locationId  The ID of the business location to associate the checkout with.
     * @param body        An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    createCheckout(locationId: string, body: CreateCheckoutRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateCheckoutResponse>>;
}
