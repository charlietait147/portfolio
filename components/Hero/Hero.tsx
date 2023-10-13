"use client"
import "./Hero.scss";
import CIcon from "@coreui/icons-react";
import { cilArrowThickToBottom } from "@coreui/icons";
function Hero() {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <p className="hero__welcome">Hi Everyone!</p>
        <h1 className="hero__tagline">
          I'm Charlie{" "}
          <strong className="hero__tagline hero__tagline--bold">Tait</strong>
        </h1>
        <p className="hero__description">
          I'm a{" "}
          <strong className="hero__description hero__description--bold">
            full stack developer
          </strong>
          , undergraduate of criminology and master's graduate of cybersecurity,
          excited to write excellent quality code to increase performance and
          productivity.{" "}
        </p>
        <div className="hero__download-CV-container">
            <button className="hero__download-CV">DOWNLOAD CV</button>
            <CIcon icon={cilArrowThickToBottom} className="hero__download-CV-icon" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
