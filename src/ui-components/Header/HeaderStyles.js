import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "../../MediaSizeStyles";

export const HeaderStyled = styled.div`
  background: black;
  height: auto;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 2rem;

  .menuLinks {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 20px;
    font-size: 1.3rem;
  }

  li {
    list-style: none;
    cursor: pointer;
  }

  ${media.tablet} {
    flex-direction: row;

    .menuLinks {
      flex-direction: row;
      align-items: center;
    }
  }
`;

export const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
