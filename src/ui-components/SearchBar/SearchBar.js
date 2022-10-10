import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetchSearchQuery from "../../customHooks/useFetchSearchQuery";
import Button from "../Button/Button";
import { SearchBarStyled } from "./SearchBarStyles";

const SearchBar = () => {
  const [movieName, setMovieName] = useState("");
  const [searchParams, setSearchParams] = useSearchParams("");
  const [query, setQuery] = useState(searchParams.get("query"));
  const [searchQuery, setSearchQuery] = useFetchSearchQuery(query);

  // update store and dispatch reducer with returned searchQuery from useFetchSearchQuery customHook
  // console.log(searchQuery);

  const handleInputChange = (e) => {
    setMovieName(e.target.value);
    setSearchParams({ query: e.target.value });
    localStorage.setItem("MOVIE_QUERY_SEARCH", JSON.stringify(e.target.value));
  };

  const searchButtonClick = (e) => {
    setQuery(movieName);
  };

  return (
    <SearchBarStyled>
      <div className="searchBarContainer">
        <input
          defaultValue={query}
          placeholder="Enter Movie Name"
          type="text"
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = "Enter Movie Name")}
          onChange={handleInputChange}
        ></input>
        <div onClick={searchButtonClick}>
          <Button primary="" btnText="Search" />
        </div>
      </div>
    </SearchBarStyled>
  );
};

export default SearchBar;
