import styled, { css } from "styled-components";
import media from "../../MediaSizeStyles";

export const MovieCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 75%;

  .container {
    position: relative;
  }

  img {
    opacity: 1;
    display: block;
    width: 100%;
    transition: 0.3s ease;
    backface-visibility: hidden;
    border-radius: 2rem;
  }

  h3,
  h5,
  .overlayText {
    display: none;
  }

  ${media.mobile} {
    width: 100%;
  }

  ${(props) =>
    props.primary &&
    css`
      .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        // height: 100%;
        // width: 100%;
        opacity: 0;
        transition: 0.3s ease;
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 2rem;
      }

      .container:hover .overlay {
        opacity: 1;
      }

      .overlayText {
        display: block;
        background-color: #04aa6d;
        color: white;
        padding: 1rem;
        border-radius: 1rem;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
        cursor: pointer;
      }

      h3,
      h5 {
        display: block;
      }
    `}
`;
