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
  const popularMoviesResults = useSelector(
    (state) => state.popularMoviesData.value.results
  );

  useEffect(() => {
    dispatch(getPopularMovies({ results: popularMovies }));
  }, [popularMovies]);

  return (
    <LandingStyled>
      <Header />
      <div className="landingContent">
        <h1>Trending Movies</h1>
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
