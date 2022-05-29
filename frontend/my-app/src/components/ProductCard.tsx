import React from "react";
import "./ProductCard.css";

import { ProductProps } from "./ProductRow";

const ProductCard = (props: ProductProps["products"][number]) => {
  return (
    <a
      className="card product-card-body"
      href={props.product_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <EcomLogo siteName={props.site} />
      <img
        className="product-image"
        src="logo512.png"
        alt={props.product_name}
      />
      <div className="card-body product-info-container">
        <h5 className="card-title">{props.product_name}</h5>
        <p className="card-text">{props.price}$</p>
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
      ) : null}
    </div>
  );
};

export default ProductCard;
