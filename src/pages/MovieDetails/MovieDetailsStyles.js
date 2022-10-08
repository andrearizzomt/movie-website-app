import styled from "styled-components";
import media from "../../MediaSizeStyles";

export const MovieDetailsStyled = styled.div`
  background: red;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .movieDetailsContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  .movieDetailSections {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 1200px;
  }

  ${media.laptop} {
    .movieDetailSections {
      height: 450px;
      flex-direction: row;
    }
  }
`;
