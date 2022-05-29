import React, { useState } from "react";
import "./App.css";

import SearchBox from "./components/SearchBox";

import ProductCard from "./components/ProductCard";
import { ProductProps } from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState<ProductProps[]>([
    { title: "title", link: "http://www.google.com" },
  ]);

  return (
    <div className="App">
      <header>
        <h1 className="heading">Gift Giver</h1>
      </header>
      <main className="main-body">
        <SearchBox setProducts={setProducts} />
        <div className="product-list">
          {products.length > 0
            ? products.map((product) => {
                return (
                  <ProductCard title={product.title} link={product.link} />
                );
              })
            : null}
        </div>
      </main>
    </div>
  );
}

export default App;
