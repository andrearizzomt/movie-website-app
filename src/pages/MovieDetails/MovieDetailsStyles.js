import styled from "styled-components";

export const MovieDetailsStyled = styled.div`
  background: red;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .movieDetailsContent {
    padding: 1rem;
  }

  .movieDetailSections {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
