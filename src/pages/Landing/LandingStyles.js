import styled from "styled-components";
import media from "../../MediaSizeStyles";

export const LandingStyled = styled.div`
  background: red;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .landingContent {
    padding: 1rem;
  }

  .movieCardsContentWrap {
    margin-top: 1rem;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
  }

  .movieCardContainer {
    display: flex;
    justify-content: center;
  }

  ${media.mobile} {
    .movieCardsContentWrap {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
  ${media.tablet} {
    .movieCardsContentWrap {
      grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
    }
  }
  ${media.laptop} {
    .movieCardsContentWrap {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
  ${media.desktop} {
    .movieCardsContentWrap {
      grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
    }
  }
  ${media.ultra} {
    .movieCardsContentWrap {
      grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
    }
  }
`;
