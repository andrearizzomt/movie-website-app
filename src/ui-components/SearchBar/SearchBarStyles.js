import styled from "styled-components";

export const SearchBarStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;

  .searchBarContainer {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
  }

  .searchBarContainer input {
    height: 100%;
    width: 75%;
    border: none;
    outline: none;
    font-size: 1rem;
    border-radius: 0.5rem;
    margin-right: -15px;
    color: gray;
    padding: 0.5rem;
  }
`;
