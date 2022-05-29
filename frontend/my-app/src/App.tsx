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
          site: "etsy.com",
          title: "title",
          price: 9,
        },
        {
          product_url: "product1.com",
          site: "etsy1.com",
          title: "title1",
          price: 90,
        },
        {
          product_url: "product2.com",
          site: "etsy2.com",
          title: "title2",
          price: 9092384,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <header>
        <h1 className="heading">Gift Giver</h1>
      </header>
      <main className="main-body">
        <SearchBox setProducts={setProducts} />
        {products
          ? products.map((product, i) => {
              return <ProductRow product={product} number={i} />;
            })
          : null}
      </main>
    </div>
  );
}

export default App;
