import React, { useState } from "react";
import { createOrderResponseSchema } from "square/dist/models/createOrderResponse";
import { createPaymentResponseSchema } from "square/dist/models/createPaymentResponse";
import "./ProductCard.css";

import { ProductProps } from "./ProductRow";

const ProductCard = (props: {
  pProps : ProductProps["products"][number];
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const locationId = 'L4YNZW1FPAWWG';
  const [canOrder, setCanOrder] = useState(false);

  const productName = props.pProps.product_name
  var productPrice = "0";
  if(parseInt(props.pProps.price) <= 0){
    productPrice = "1";
  } else{
    productPrice = props.pProps.price;
  }

    
  async function createOrUpdateOrder() {
    const body = JSON.stringify({
      locationId: locationId,
      lineItems: [{
        name: productName,
        quantity: '1',
        basePriceMoney: {
          amount: productPrice,
          currency: 'USD'
        }}]
    });

    console.log("creating Order (add to cart API call)");
    
    const orderResponse = await fetch('/orderItem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });
    console.log(orderResponse.json());

    
    if (orderResponse.ok) {
      return orderResponse.json();
    }
    const errorBody = await orderResponse.text();
    throw new Error(errorBody);
  }
  
  var addToCartResults;

  const handleAddToCart = async (e: React.FormEvent) => { // just reuse however this API call works
    props.setIsLoading(true);
    e.preventDefault(); //?

    console.log("add to cart button clicked")
    try {
      props.setIsLoading(true);
      addToCartResults = await createOrUpdateOrder();
      console.log("finished trying")
    } catch (e) {
      console.log("it didnt work");
    }
  }

  return (
    <a
      className="card product-card-body"
      //href={props.product_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <EcomLogo siteName={props.pProps.site} />
      <img
        className="product-image"
        src={props.pProps.image_url}
        alt={props.pProps.product_name}
      />
      <div className="card-body product-info-container">
        <h5 className="card-title product-card-title">{props.pProps.product_name}</h5>
        <p className="card-text">${props.pProps.price}</p>
        <button id="add-to-cart-button" type="button" onClick={handleAddToCart}>
          Add To Cart
          </button>
      </div>
    </a>
  );
};


const EcomLogo = (props: { siteName: string }) => {
  return (
    <div className="logo-box">
      {props.siteName === "Amazon" ? (
        <img
          src="Amazon_logo.png"
          alt="Amazon Product"
          className="logo-image-amazon"
        />
      ) : props.siteName === "Etsy" ? (
        <img src="Etsy_logo.png" alt="Etsy Logo" className="logo-image-etsy" />
      ) : props.siteName === "Uncommon Goods" ? (
        <img
          src="uncommon-goods-logo.png"
          alt="Uncommon Goods Logo"
          className="logo-image-uncommon-goods"
        />
      ) : null}
    </div>
  );
};




export default ProductCard;
