import React from "react";
import "./ProductCard.css";

export type ProductProps = {
  title: string;
  link: string;
};

const ProductCard = (props: ProductProps) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="product-card-body"
    >
      <div className="image-container">
        <img
          src="logo512.png"
          alt={props.title}
          className="product-image"
        ></img>
      </div>
      <div className="product-info-container">
        <h3 className="product-title">{props.title}</h3>
      </div>
    </a>
  );
};

export default ProductCard;
