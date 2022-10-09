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
    <>
      {activeModal === "" && null}
      {activeModal === "active" && (
        <ModalStyled active={active} onClick={closeModal}>
          <div className="iframeContainer">
            <iframe
              className="iframeResponsive"
              width="1280"
              height="800"
              src={`https://www.youtube-nocookie.com/embed/${officialTrailerKey}`}
              title="YouTube video player"
              frameBorder="0"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </ModalStyled>
      )}
    </>
  );
};

export default Modal;
