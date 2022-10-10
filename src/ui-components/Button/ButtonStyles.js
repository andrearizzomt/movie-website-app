import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
  background: black;
  height: 100%;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: 1px solid white;
  color: white;
  padding: 0.25rem;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background: white;
    color: black;
  }

  ${(props) =>
    props.primary &&
    css`
      background-color: lightblue;
      color: black;
      border: none;
      padding: 0.5rem;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 1.5rem;
      &:hover {
        background: red;
        color: white;
      }
    `};
`;
