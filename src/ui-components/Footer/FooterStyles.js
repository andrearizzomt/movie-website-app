import styled from "styled-components";

export const FooterStyled = styled.div`
  background: gray;
  height: auto;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;

  ul {
    display: flex;
    flex-direction: column;
  }

  li {
    list-style: none;
  }

  @media (min-width: 420px) {
    ul {
      flex-direction: row;
      gap: 5px;
    }
  }
`;
