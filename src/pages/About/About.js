import React from "react";
import Footer from "../../ui-components/Footer/Footer";
import Header from "../../ui-components/Header/Header";
import { AboutStyled } from "./AboutStyled";

const About = () => {
  return (
    <AboutStyled>
      <Header />
      <div className="aboutContent">
        <h1>About Us</h1>
      </div>
      <Footer />
    </AboutStyled>
  );
};

export default About;
