import React from "react";
import { Link } from "react-router-dom";
import { MovieCardStyled } from "./MovieCardStyles";

const MovieCard = (props) => {
  const { primary, filmId, title, rating, imageSource } = props;

  const ratingInPercentage = rating * 10;

  return (
    <MovieCardStyled primary={primary}>
      <h3>{title}</h3>
      <div className="container">
        <img className="image" src={imageSource} alt="movie poster" />
        <div className="overlay">
          <Link to={"/movie_details"} state={{ filmId: filmId }}>
            <div
              className="overlayText"
              // Storing latest selected Movie filmID in local storage be available for Movie Details Page if refreshed
              onClick={() =>
                localStorage.setItem("SELECTED_FILMID", JSON.stringify(filmId))
              }
            >
              More Info
            </div>
          </Link>
        </div>
      </div>
      <h5>User Rating: {ratingInPercentage}%</h5>
    </MovieCardStyled>
  );
};

export default MovieCard;
