/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetchSearchQuery from "../../customHooks/useFetchSearchQuery";
import { getMovies } from "../../store";
import Footer from "../../ui-components/Footer/Footer";
import Header from "../../ui-components/Header/Header";
import MovieCard from "../../ui-components/MovieCard/MovieCard";
import { SearchStyled } from "./SearchStyles";

const Search = () => {
  const searchMovie = JSON.parse(localStorage.getItem("MOVIE_QUERY_SEARCH"));
  const [searchQuery] = useFetchSearchQuery(searchMovie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies({ results: searchQuery }));
    // Storing Movie Results in local storage to be available for Movie Details Page if refreshed
    localStorage.setItem("MOVIE_RESULTS", JSON.stringify(searchQuery));
  }, [searchQuery]);

  const searchMoviesResults = useSelector(
    (state) => state.moviesData.value.results
  );

  return (
    <SearchStyled>
      <Header />
      {searchMoviesResults.length === 0 && (
        <div className="searchContent">
          <h1>Search Results</h1>
          <p>Please Enter Movie Name</p>
        </div>
      )}
      {searchMoviesResults.length !== 0 && (
        <div className="searchContent">
          <h1>Search Results</h1>
          <div className="movieCardsContentWrap">
            {searchMoviesResults.map((searchMoviesResults) => (
              <div className="movieCardContainer" key={searchMoviesResults.id}>
                <MovieCard
                  primary="primary"
                  filmId={searchMoviesResults.id}
                  title={searchMoviesResults.title}
                  rating={searchMoviesResults.vote_average}
                  imageSource={`https://image.tmdb.org/t/p/w300/${searchMoviesResults.poster_path}`}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </SearchStyled>
  );
};

export default Search;
