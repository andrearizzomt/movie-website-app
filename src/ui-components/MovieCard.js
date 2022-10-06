import React from "react";

const MovieCard = (props) => {
  const { title, imageSource } = props;

  return (
    <div>
      <h5>{title}</h5>
      <img src={imageSource} alt="movie poster" />
    </div>
  );
};

export default MovieCard;
