import React from "react";
import "./ProductRow.css";

import ProductCard from "./ProductCard";

export type ProductProps = {
  recommendation: string;
  justification: string;
  products: {
    site: string;
    product_name: string;
    price: string;
    currency: string;
    image_url: string;
    product_url: string;
  }[];
};

const ProductRow = (props: {
  productRecommendation: ProductProps;
  number: number;
}) => {
  return (
    <>
      <div className="product-row-container">
        <div className="product-row-title">
          <span className="product-row-prodname">
            <strong>{props.number}{".  "}{props.productRecommendation.recommendation}</strong>
          </span>
          <span className="product-row-justification">
            {props.productRecommendation.justification}
          </span>
        </div>
        <div className="product-container">
          {props.productRecommendation.products
            ? props.productRecommendation.products.map((prod, i) => {
                return (
                  <ProductCard
                    key={i}
                    currency={prod.currency}
                    image_url={prod.image_url}
                    product_name={prod.product_name}
                    price={prod.price}
                    product_url={prod.product_url}
                    site={prod.site}
                  />
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default ProductRow;
