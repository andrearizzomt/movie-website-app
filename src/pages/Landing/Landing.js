/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import useFetchPopularMovies from "../../customHooks/useFetchPopularMovies";
import { getMovies } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../ui-components/MovieCard/MovieCard";
import Header from "../../ui-components/Header/Header";
import { LandingStyled } from "./LandingStyles";
import Footer from "../../ui-components/Footer/Footer";
import SearchBar from "../../ui-components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";
import useFetchMovieCategories from "../../customHooks/useFetchMovieCategories";

const Landing = () => {
  const [movieName, setMovieName] = useState("");
  const [searchParams, setSearchParams] = useSearchParams("");
  const [query, setQuery] = useState(searchParams.get("query"));

  const [searchPopMovies] = useFetchPopularMovies("discover");

  // const [filmCategory] = useFetchMovieCategories();
  // console.log(filmCategory);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies({ results: searchPopMovies }));
    // Storing Movie Results in local storage to be available for Movie Details Page if refreshed
    localStorage.setItem("MOVIE_RESULTS", JSON.stringify(searchPopMovies));
  }, [searchPopMovies]);

  const popularMoviesResults = useSelector(
    (state) => state.moviesData.value.results
  );

  return (
    <LandingStyled>
      <Header />
      <SearchBar
        movieName={movieName}
        setMovieName={setMovieName}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        query={query}
        setQuery={setQuery}
      />
      <div className="landingContent">
        <h1>Top 8 Trending Movies</h1>
        <div className="movieCardsContentWrap">
          {popularMoviesResults
            .filter((popularMovieResult, id) => id < 8)
            .map((popularMovieResult) => (
              <div className="movieCardContainer" key={popularMovieResult.id}>
                <MovieCard
                  primary="primary"
                  filmId={popularMovieResult.id}
                  title={popularMovieResult.title}
                  rating={popularMovieResult.vote_average}
                  imageSource={`https://image.tmdb.org/t/p/w300/${popularMovieResult.poster_path}`}
                />
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </LandingStyled>
  );
};

export default Landing;
