import React from "react";
import "./ProductCard.css";

import Slider from "react-slick";

import { ProductProps } from "./ProductRow";
import ProductCard from "./ProductCard";

const ProductRow = (props: { products: ProductProps["products"] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log(props.products);

  return (
    <div>
      <Slider {...settings}>
        {props.products.length > 0
          ? props.products.map((prod, i) => {
              return (
                <ProductCard
                  key={i}
                  title={prod.title}
                  price={prod.price}
                  product_url={prod.product_url}
                  site={prod.site}
                />
              );
            })
          : null}
      </Slider>
    </div>
  );
};

export default ProductRow;
