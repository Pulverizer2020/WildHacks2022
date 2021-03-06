import React, { useState } from "react";
import "./SearchBox.css";

import { ProductProps } from "./ProductRow";

const SearchBox = (props: {
  setProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleTextChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setSearchQuery(e.currentTarget.value);
  };

  const [creativity, setCreativity] = useState(0.7);

  const handleSubmit = async (e: React.FormEvent) => {
    props.setIsLoading(true);
    e.preventDefault();

    const data = { prompt: searchQuery, temperature: creativity };

    try {
      const apiCall: Response = await fetch(
        "http://127.0.0.1:5000/api/search",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      apiCall.json().then((res: ProductProps[]) => {
        console.log(res);
        props.setIsLoading(false);
        props.setProducts(res);
      });
    } catch (err) {
      console.log("error:", err);
      props.setIsLoading(false);
    }
  };

  return (
    <>
      <div className="form-wrapper">
        <textarea
          className="search-box"
          value={searchQuery}
          onChange={handleTextChange}
          placeholder="Example: A women in her mid 20s. She likes reading comic books and attending
          music festivals."
        ></textarea>
        <div className="slider">
          <span>More Predictable</span>
          <div className="slider-container">
            <input
              type="range"
              className="form-range"
              id="customRange1"
              aria-orientation="vertical"
              min="0.4"
              max="1.0"
              value={creativity}
              onChange={(e) => {
                setCreativity(Number(e.currentTarget.value));
              }}
              step="0.01"
            />
          </div>
          <span>More Creative</span>
        </div>

        <button className="button-87" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default SearchBox;
