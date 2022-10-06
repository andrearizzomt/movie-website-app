/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const useFetchPopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
  const API_KEY = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

  useEffect(() => {
    const fetchPopularMovies = async () => {
      await fetch(`${BASE_URL}${API_KEY}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Response status " + response.status);
        })
        .then((data) => {
          setPopularMovies(data.results);
          // console.log(data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchPopularMovies();
  }, []);

  return { popularMovies };
};

export default useFetchPopularMovies;
