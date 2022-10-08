import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
  background: white;
  border-radius: 0.5rem;
  border: none;
  color: black;
  padding: 0.5rem;
  cursor: pointer;
  transition: 0.3s ease;

  ${(props) =>
    props.primary &&
    css`
      background-color: lightblue;
      color: black;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 1.5rem;
      &:hover {
        background: red;
        color: white;
      }
    `};
`;
