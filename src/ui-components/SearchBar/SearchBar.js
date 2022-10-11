/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { SearchBarStyled } from "./SearchBarStyles";

const SearchBar = (props) => {
  const { movieName, setMovieName, setSearchParams, query, setQuery } = props;

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
          <Link to={"/search"} state={{ movieName: movieName }}>
            <Button primary="" btnText="Search" />
          </Link>
        </div>
      </div>
    </SearchBarStyled>
  );
};

export default SearchBar;
