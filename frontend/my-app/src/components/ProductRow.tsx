import React from "react";
import "./ProductRow.css";

import ProductCarousel from "./ProductCarousel";
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
        <div>
          <h2 className="product-row-heading">
            {props.number}. {props.productRecommendation.recommendation};{" "}
            <span>{props.productRecommendation.justification}</span>
          </h2>
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
