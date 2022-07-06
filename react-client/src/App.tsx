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
      </header>
      <div className="instructions-container">
        Enter a description of the person you want to buy a gift for, and we
        will suggest unique gift ideas. The more detail you provide, the more
        information we have to work with!
      </div>
      <main className="main-body">
        <SearchBox setProducts={setProducts} setIsLoading={setIsLoading} />
        {isLoading ? (
          <div>Your gifts are loading!</div>
        ) : products ? (
          products.map((product, i) => {
            return (
              <ProductRow
                key={i}
                productRecommendation={product}
                number={i + 1}
              />
            );
          })
        ) : null}
      </main>
    </div>
  );
}

export default App;
