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
      <img className="product-image" src="logo512.png" alt={props.title} />
      <div className="card-body product-info-container">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </a>
  );
};

export default ProductCard;
