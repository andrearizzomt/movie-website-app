/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import useFetchPopularMovies from "../customHooks/useFetchPopularMovies";
import { getPopularMovies } from "../store";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const Landing = () => {
  const { popularMovies } = useFetchPopularMovies();

  const dispatch = useDispatch();
  const popularMoviesResults = useSelector(
    (state) => state.popularMovies.value.results
  );

  useEffect(() => {
    dispatch(getPopularMovies({ results: popularMovies }));
  }, [popularMovies]);

  return (
    <>
      <h1>Landing Page</h1>
      <h2>Current Top Movies</h2>
      {popularMoviesResults
        .filter((popularMovieResult, id) => id < 8)
        .map((popularMovieResult) => (
          <div key={popularMovieResult.id}>
            <MovieCard
              title={popularMovieResult.title}
              imageSource={`https://image.tmdb.org/t/p/w300/${popularMovieResult.poster_path}`}
            />
          </div>
        ))}
    </>
  );
};

export default Landing;
