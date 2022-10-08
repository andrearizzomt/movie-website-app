import styled from "styled-components";
import media from "../../MediaSizeStyles";

export const MovieCardDetailsStyled = styled.div`
  background: tomato;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 2rem;
  min-height: 100%;
  gap: 10px;

  h1 {
    font-size: 2.5rem;
    line-height: 45px;
  }
  h2 {
    font-size: 1.5rem;
    line-height: 45px;
  }

  h2,
  h4 {
    font-weight: 400;
  }

  .sideBySide {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  article {
    text-align: justify;
  }

  .buttonContainer {
    width: 100%;
  }

  ${media.laptop} {
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    .sideBySide {
      flex-direction: row;
    }
  }
`;
