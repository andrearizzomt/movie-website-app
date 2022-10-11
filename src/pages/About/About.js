import React from "react";
import Footer from "../../ui-components/Footer/Footer";
import Header from "../../ui-components/Header/Header";
import { AboutLink, AboutStyled } from "./AboutStyles";

const About = () => {
  return (
    <AboutStyled>
      <Header />
      <div className="aboutContent">
        <h1>About Us</h1>
        <div className="aboutSection">
          <p>
            <AboutLink to="/"> MooVees </AboutLink>
            website is a personal project and uses a third party API provided by{" "}
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Movie Database (TMDB)
            </a>
          </p>
          <article>
            <em>
              " <span>The Movie Database (TMDB)</span> is a community built
              movie and TV database. Every piece of data has been added by our
              amazing community dating back to 2008. TMDb's strong international
              focus and breadth of data is largely unmatched and something we're
              incredibly proud of. Put simply, we live and breathe community and
              that's precisely what makes us different. "
            </em>
          </article>
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt="TMDB Logo"
            />
          </a>
          <p className="bottom">
            All film-related metadata used in <span>MooVees</span>, including
            actor, director and studio names, synopses, release dates, trailers
            and poster art are supplied by{" "}
            <span>The Movie Database (TMDB)</span>
          </p>
          <p className="bottom">
            <em>
              <span>MooVees</span> uses the The Movie Database (TMDB) API but is
              not endorsed or certified by{" "}
              <a
                href="https://www.themoviedb.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Movie Database (TMDB)
              </a>
            </em>
          </p>
        </div>
      </div>
      <Footer />
    </AboutStyled>
  );
};

export default About;
