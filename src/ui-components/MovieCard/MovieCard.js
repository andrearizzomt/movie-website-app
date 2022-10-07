import React from "react";
import { MovieCardStyled } from "./MovieCardStyles";

const MovieCard = (props) => {
  const { title, vote, imageSource } = props;

  return (
    <MovieCardStyled>
      <h3>{title}</h3>
      <div className="container">
        <img className="image" src={imageSource} alt="movie poster" />
        <div className="overlay">
          <div className="overlayText">More Info</div>
        </div>
      </div>
      <h5>Vote Average: {vote}</h5>
    </MovieCardStyled>
  );
};

export default MovieCard;
