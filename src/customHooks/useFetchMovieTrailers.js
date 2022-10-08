/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const useFetchMovieTrailers = (filmId) => {
  const [movieTrailers, setMovieTrailers] = useState([]);

  const TRAILER_BASE_URL = "https://api.themoviedb.org/3/movie";
  const FILM_ID = `/${filmId}/videos`;
  const API_KEY = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

  useEffect(() => {
    const fetchMovieTrailers = async () => {
      await fetch(`${TRAILER_BASE_URL}${FILM_ID}${API_KEY}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Response status " + response.status);
        })
        .then((data) => {
          setMovieTrailers(data.results);
          // console.log(data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchMovieTrailers();
  }, [filmId]);

  return { movieTrailers };
};

export default useFetchMovieTrailers;
