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
  isLoadingProdCard: React.Dispatch<React.SetStateAction<boolean>>; // not sure how this is supposed to be setup
}) => {
  return (
    <>
      <div className="product-row-container">
        <div className="product-row-title">
          <span className="product-row-prodname">
            <strong>
              {props.number}
              {"."}&nbsp;
            </strong>
          </span>
          <div className="product-row-prodname">
            <strong>{props.productRecommendation.recommendation}</strong>
            <span className="product-row-justification">
              {props.productRecommendation.justification}
            </span>
          </div>
        </div>
        <div className="product-container">
          {props.productRecommendation.products
            ? props.productRecommendation.products.map((prod, i) => {
                return (
                  <ProductCard
                      key={i}
                      pProps={prod}
                      setIsLoading={props.isLoadingProdCard}
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
