import React, { useState } from "react";
import "./App.css";

import SearchBox from "./components/SearchBox";

import { ProductProps } from "./components/ProductRow";
import ProductRow from "./components/ProductRow";

function App() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isLoadingProdCard, setIsLoadingProdCard] = useState(false);

  const locationId = 'L4YNZW1FPAWWG';
  async function handleCheckout() {
    console.log("Checkout starting");
    const body = JSON.stringify({
      locationId: locationId
    });
    var checkoutLoc = ""
    const checkoutResponse = await fetch('/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body
    });
    console.log("finished checkoutResponse")
    checkoutResponse.json().then(value => {
      console.log("inside then")
      console.log(value)
      window.open(value['checkoutURL'], "_blank");
    });
    console.log("outside then");
    
   //window.open(checkoutLoc, "_blank");




    /*
    if (checkoutResponse.ok) {
      return checkoutResponse.json();
    }
    const errorBody = await checkoutResponse.text();
    throw new Error(errorBody);
    */
  }



  return (
    <div className="App">
      <header>
        <h1 className="heading">The Gift Whisperer</h1>
        <button id="checkout-button" type="button" className="checkout-button" onClick={handleCheckout}>
          Checkout
          </button>
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
                isLoadingProdCard={setIsLoadingProdCard}
              />
            );
          })
        ) : null}
      </main>
    </div>
  );
}

export default App;
