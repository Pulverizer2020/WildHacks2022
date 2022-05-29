import React, { useState } from "react";
import "./SearchBox.css";

import { ProductProps } from "./ProductRow";

const SearchBox = (props: {
  setProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>;
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleTextChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setSearchQuery(e.currentTarget.value);
  };

  const [creativity, setCreativity] = useState(100);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = { prompt: searchQuery };

    try {
      const apiCall: Response = await fetch(
        "http://127.0.0.1:5000/api/search",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );

      apiCall.json().then((res: ProductProps[]) => {
        props.setProducts(res);
      });

      // setTextResponse(res.json());
    } catch (err) {
      console.log("error:", err);
    }
  };

  return (
    <>
      <div className="form-wrapper">
        <textarea
          className="search-box form-control"
          value={searchQuery}
          onChange={handleTextChange}
        ></textarea>
        <input
          type="range"
          className="form-range"
          id="customRange1"
          aria-orientation="vertical"
        />
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default SearchBox;
