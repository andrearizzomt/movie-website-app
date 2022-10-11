/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export default function useFetchMovieTrailers(filmIdData) {
  filmIdData = JSON.parse(localStorage.getItem("SELECTED_FILMID"));

  const [movieTrailers, setMovieTrailers] = useState([]);

  const TRAILER_BASE_URL = "https://api.themoviedb.org/3/movie";
  const FILM_ID = `/${filmIdData}/videos`;
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
  }, [filmIdData]);

  return [movieTrailers, setMovieTrailers];
}
