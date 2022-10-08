import React, { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { MovieCardDetailsStyled } from "./MovieCardDetailsStyles";

const MovieCardDetails = (props) => {
  const { title, date, rating, overview, officialTrailerKey } = props;

  const [activeModal, setActiveModal] = useState("");

  const showModal = () => {
    if (activeModal === "") {
      setActiveModal("active");
    } else {
      setActiveModal("");
    }
  };

  const year = date.substring(0, 4);
  const ratingInPercentage = rating * 10;

  return (
    <MovieCardDetailsStyled>
      <div className="sideBySide">
        <h1>{title}</h1>
        <h2>{`(${year})`}</h2>
      </div>
      <div className="sideBySide">
        <h3>User Rating:</h3>
        <h4>{ratingInPercentage}%</h4>
      </div>
      <div className="sideBySide">
        <h3>Released:</h3>
        <h4>{date}</h4>
      </div>
      <h3>Overview:</h3>
      <article>{overview}</article>
      <div className="buttonContainer" onClick={showModal}>
        <Button primary="primary" btnText="Watch Trailer" onClick />
      </div>
      <Modal
        active={activeModal}
        officialTrailerKey={officialTrailerKey}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />
    </MovieCardDetailsStyled>
  );
};

export default MovieCardDetails;
