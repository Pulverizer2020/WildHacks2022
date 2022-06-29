import React from "react";
import "./ProductCard.css";

import Slider from "react-slick";

import { ProductProps } from "./ProductRow";
import ProductCard from "./ProductCard";

const ProductRow = (props: { 
  products: ProductProps["products"] 
  isLoadingProdCard: React.Dispatch<React.SetStateAction<boolean>>; // not sure how this is supposed to be setup
}) => {
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
                  pProps={prod}
                  setIsLoading={props.isLoadingProdCard}
                  //currency={prod.currency}
                  //image_url={prod.image_url}
                  //product_name={prod.product_name}
                  //price={prod.price}
                  //product_url={prod.product_url}
                  //site={prod.site}
                />
              );
            })
          : null}
      </Slider>
    </div>
  );
};

export default ProductRow;
