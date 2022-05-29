import React, { useState } from "react";
import "./App.css";

import SearchBox from "./components/SearchBox";

import { ProductProps } from "./components/ProductRow";
import ProductRow from "./components/ProductRow";

function App() {
  const [products, setProducts] = useState<ProductProps[]>([
    {
      recommendation: "recommendation",
      justification: "justification",
      products: [
        {
          product_url: "product.com",
          site: "Amazon",
          product_name: "title",
          price: "9",
          currency: "usd",
          image_url: "goadfogle.com",
        },
        {
          product_url: "producadft.com",
          site: "Etsy",
          product_name: "title",
          price: "9",
          currency: "usd",
          image_url: "google.com",
        },
        {
          product_url: "proasdfduct.com",
          site: "Etsy",
          product_name: "title",
          price: "adf9",
          currency: "usd",
          image_url: "google.com",
        },
      ],
    },
    {
      recommendation: "recommendation",
      justification: "justification",
      products: [
        {
          product_url: "product.com",
          site: "Amazon",
          product_name: "title",
          price: "9",
          currency: "usd",
          image_url: "goadfogle.com",
        },
        {
          product_url: "producadft.com",
          site: "Etsy",
          product_name: "title",
          price: "9",
          currency: "usd",
          image_url: "google.com",
        },
        {
          product_url: "proasdfduct.com",
          site: "Etsy",
          product_name: "title",
          price: "adf9",
          currency: "usd",
          image_url: "google.com",
        },
      ],
    },
    {
      recommendation: "recommendation",
      justification: "justification",
      products: [
        {
          product_url: "product.com",
          site: "Amazon",
          product_name: "title",
          price: "9",
          currency: "usd",
          image_url: "goadfogle.com",
        },
        {
          product_url: "producadft.com",
          site: "Etsy",
          product_name: "title",
          price: "9",
          currency: "usd",
          image_url: "google.com",
        },
        {
          product_url: "proasdfduct.com",
          site: "Etsy",
          product_name: "title",
          price: "adf9",
          currency: "usd",
          image_url: "google.com",
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <header>
        <h1 className="heading">The Gift Whisperer</h1>
        <p>We use the latest technology in AI to recommend gifts</p>
      </header>
      <main className="main-body">
        <SearchBox setProducts={setProducts} />
        {products
          ? products.map((product, i) => {
              return (
                <ProductRow
                  key={i}
                  productRecommendation={product}
                  number={i + 1}
                />
              );
            })
          : null}
      </main>
    </div>
  );
}

export default App;
