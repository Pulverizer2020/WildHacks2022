import React, { useState } from "react";
import "./App.css";

import SearchBox from "./components/SearchBox";

import { ProductProps } from "./components/ProductRow";
import ProductRow from "./components/ProductRow";

function App() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <header>
        <h1 className="heading">The Gift Whisperer</h1>
        <p>We use the latest AI to recommend gifts</p>
      </header>
      <main className="main-body">
        <SearchBox setProducts={setProducts} setIsLoading={setIsLoading} />
        {products ? (
          products.map((product, i) => {
            return (
              <ProductRow
                key={i}
                productRecommendation={product}
                number={i + 1}
              />
            );
          })
        ) : isLoading ? (
          <div>Your gifts are loading!</div>
        ) : null}
      </main>
    </div>
  );
}

export default App;
