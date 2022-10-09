import { Link } from "react-router-dom";
import styled from "styled-components";

export const AboutStyled = styled.div`
  background: red;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .aboutContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    font-size: 1.3rem;
  }

  .aboutSection {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 1200px;
    text-align: center;
  }

  article {
    font-size: 1.1rem;
    text-align: center;
    max-width: 1000px;
    line-height: 2;
  }

  span {
    font-weight: 700;
  }

  .bottom {
    font-size: 1rem;
  }

  img {
    width: 15rem;
  }
`;

export const AboutLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 700;
`;
