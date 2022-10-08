import styled, { css } from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;

  ${(props) =>
    props.active &&
    css`
      display: flex;
    `};

  .trailerVideoContainer {
  }
`;
