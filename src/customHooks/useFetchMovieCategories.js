/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export default function useFetchMovieCategories() {
  const [filmCategory, setFilmCategory] = useState([]);

  const BASE_URL = "https://api.themoviedb.org/3/genre/movie/list";
  const API_KEY = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

  useEffect(() => {
    const fetchMovieCategories = async () => {
      await fetch(`${BASE_URL}${API_KEY}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Response status " + response.status);
        })
        .then((data) => {
          setFilmCategory(data.genres);
          // console.log(data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchMovieCategories();
  }, []);

  return [filmCategory, setFilmCategory];
}
