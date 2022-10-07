import React from "react";
import { Link } from "react-router-dom";
import { MovieCardStyled } from "./MovieCardStyles";

const MovieCard = (props) => {
  const { filmId, title, vote, imageSource } = props;

  return (
    <MovieCardStyled>
      <h3>{title}</h3>
      <div className="container">
        <img className="image" src={imageSource} alt="movie poster" />
        <div className="overlay">
          <Link to={"/movie_details"} state={{ filmId: filmId }}>
            <div className="overlayText">More Info</div>
          </Link>
        </div>
      </div>
      <h5>Vote Average: {vote}</h5>
    </MovieCardStyled>
  );
};

export default MovieCard;
