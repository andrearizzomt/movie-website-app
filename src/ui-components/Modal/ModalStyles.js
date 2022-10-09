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

  .iframeContainer {
    position: relative;
    overflow: hidden;
    width: 75%;
    padding-top: 42.18%;
  }

  .iframeResponsive {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;
