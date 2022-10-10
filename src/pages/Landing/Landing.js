/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import useFetchPopularMovies from "../../customHooks/useFetchPopularMovies";
import { getPopularMovies } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../ui-components/MovieCard/MovieCard";
import Header from "../../ui-components/Header/Header";
import { LandingStyled } from "./LandingStyles";
import Footer from "../../ui-components/Footer/Footer";

const Landing = () => {
  const { popularMovies } = useFetchPopularMovies();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMovies({ results: popularMovies }));
    // Storing Movie Results in local storage to be available for Movie Details Page if refreshed
    localStorage.setItem("MOVIE_RESULTS", JSON.stringify(popularMovies));
  }, [popularMovies]);

  const popularMoviesResults = useSelector(
    (state) => state.popularMoviesData.value.results
  );

  return (
    <LandingStyled>
      <Header />
      <div className="landingContent">
        <h1>Trending Popular Movies</h1>
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
