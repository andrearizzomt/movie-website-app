import React from "react";
import { ModalStyled } from "./ModalStyles";

const Modal = (props) => {
  const { active, officialTrailerKey, activeModal, setActiveModal } = props;

  const closeModal = () => {
    if (active === "active") {
      setActiveModal("");
    }
  };

  return (
    <div className="trailerVideoContainer">
      {activeModal === "" && null}
      {activeModal === "active" && (
        <ModalStyled active={active} onClick={closeModal}>
          <iframe
            width="1280"
            height="800"
            src={`https://www.youtube-nocookie.com/embed/${officialTrailerKey}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </ModalStyled>
      )}
    </div>
  );
};

export default Modal;
