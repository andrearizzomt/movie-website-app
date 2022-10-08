import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import useFetchMovieTrailers from "../../customHooks/useFetchMovieTrailers";
import Footer from "../../ui-components/Footer/Footer";
import Header from "../../ui-components/Header/Header";
import MovieCard from "../../ui-components/MovieCard/MovieCard";
import MovieCardDetails from "../../ui-components/MovieCardDetails/MovieCardDetails";
import { MovieDetailsStyled } from "./MovieDetailsStyles";

const MovieDetails = () => {
  // Get selected movie ID passing it as state from the MovieCard component
  const { state } = useLocation();
  const filmId = state.filmId;

  // Get list of all popular movies from redux store state
  const popularMoviesResults = useSelector(
    (state) => state.popularMoviesData.value.results
  );
  // console.log(popularMoviesResults);

  // Filtering for selected movie to match filmId passed from state prop
  const selectedMovie = popularMoviesResults.filter(
    (popularMovieResult) => popularMovieResult.id === filmId
  );
  // console.log(selectedMovie[0].id, selectedMovie[0].title);

  // Get list of all movie trailers for the filmId
  const { movieTrailers } = useFetchMovieTrailers(filmId);
  // console.log(movieTrailers);

  // Filtering for official trailer movie (on Youtube) as some may have more than one movie clip
  const officialTrailerMovie = movieTrailers.filter(
    (movieTrailer) => movieTrailer.name === "Official Trailer"
  );

  return (
    <MovieDetailsStyled>
      <Header />
      <div className="movieDetailsContent">
        <h1>Movie Details</h1>
        <div className="movieDetailSections">
          {popularMoviesResults.length === 0 && (
            // Navigate to Landing page if MovieDetails page is refreshed since redux store will refresh state
            <Navigate to="/" replace />
          )}
          {popularMoviesResults.length !== 0 && (
            <>
              <MovieCard
                primary=""
                imageSource={`https://image.tmdb.org/t/p/w300/${selectedMovie[0].poster_path}`}
              />
              {officialTrailerMovie.length === 0 && (
                <MovieCardDetails
                  title={selectedMovie[0].title}
                  date={selectedMovie[0].release_date}
                  rating={selectedMovie[0].vote_average}
                  overview={selectedMovie[0].overview}
                />
              )}
              {officialTrailerMovie.length !== 0 && (
                <MovieCardDetails
                  title={selectedMovie[0].title}
                  date={selectedMovie[0].release_date}
                  rating={selectedMovie[0].vote_average}
                  overview={selectedMovie[0].overview}
                  officialTrailerKey={officialTrailerMovie[0].key}
                />
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </MovieDetailsStyled>
  );
};

export default MovieDetails;
