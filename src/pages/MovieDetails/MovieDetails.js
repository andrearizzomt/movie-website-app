import React from "react";
import Footer from "../../ui-components/Footer/Footer";
import Header from "../../ui-components/Header/Header";
import { MovieDetailsStyled } from "./MovieDetailsStyles";

const MovieDetails = () => {
  return (
    <MovieDetailsStyled>
      <Header />
      <div className="movieDetailsContent">
        <h1>Movie Details</h1>
      </div>
      <Footer />
    </MovieDetailsStyled>
  );
};

export default MovieDetails;
