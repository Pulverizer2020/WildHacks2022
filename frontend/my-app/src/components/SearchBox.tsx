import React, { useState } from "react";
import "./SearchBox.css";

import { ProductProps } from "./ProductCard";

const SearchBox = (props: {
  setProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>;
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const [textResponse, setTextResponse] = useState("");

  const handleTextChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setSearchQuery(e.currentTarget.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = { prompt: searchQuery };
    console.log(data);
    try {
      const apiCall: Response = await fetch(
        "http://127.0.0.1:5000/api/search",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );

      console.log(apiCall);

      apiCall.json().then((res) => {
        setTextResponse(res);
      });

      // setTextResponse(res.json());
    } catch (err) {
      console.log("error:", err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          className="search-box"
          value={searchQuery}
          onChange={handleTextChange}
        ></textarea>
        <input type="submit" value="Submit"></input>
        {textResponse ? textResponse : null}
      </form>
    </>
  );
};

export default SearchBox;
