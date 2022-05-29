import React from "react";
import "./ProductCard.css";

import ProductCarousel from "./ProductCarousel";

export type ProductProps = {
  recommendation: string;
  justification: string;
  products: {
    product_url: string;
    site: string;
    title: string;
    price: number;
  }[];
};

const ProductRow = (props: {
  productRecommendation: ProductProps;
  number: number;
}) => {
  return (
    <>
      <div>
        <div>
          <h2>
            {props.number}. {props.productRecommendation.recommendation};{" "}
            <span>{props.productRecommendation.justification}</span>
          </h2>
        </div>
        <ProductCarousel products={props.productRecommendation.products} />
      </div>
    </>
  );
};

export default ProductRow;
