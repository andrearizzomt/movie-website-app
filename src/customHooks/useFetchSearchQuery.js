/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export default function useFetchSearchQuery(querySearch) {
  const [filmNameQuery, setfilmNameQuery] = useState([]);

  const BASE_URL = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
  const QUERY_SEARCH = `&query=${querySearch}`;

  useEffect(() => {
    const fetchSearchQuery = async () => {
      await fetch(`${BASE_URL}${API_KEY}${QUERY_SEARCH}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Response status " + response.status);
        })
        .then((data) => {
          setfilmNameQuery(data.results);
          // console.log(data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchSearchQuery();
  }, [querySearch]);

  return [filmNameQuery, setfilmNameQuery];
}
