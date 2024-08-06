"use client";
import "./Hero.scss";
import downloadIcon from "../../public/assets/icons/download.png";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__welcome-container">
          <p className="hero__welcome">Hi Everyone! &#128075;</p>
        </div>
        <h1 className="hero__tagline">
          I&#39;m Charlie{" "}
          <strong className="hero__tagline hero__tagline--bold">Tait</strong>
        </h1>
        <p className="hero__description">
          I&#39;m a{" "}
          <strong className="hero__description hero__description--bold">
            full stack developer{" "}
          </strong>
          {/* undergraduate of criminology and master's graduate of cybersecurity, */}
          excited to write excellent quality code to increase performance and
          productivity.{" "}
        </p>
        <div className="hero__download-CV-container">
          <a
            href="https://drive.google.com/file/d/1l2ez-tvxOjUAuRxzt9lsRlVsSvBlCXSy/view"
            className="hero__download-CV"
          >
            DOWNLOAD CV
          </a>
          <Link href="https://drive.google.com/file/d/1l2ez-tvxOjUAuRxzt9lsRlVsSvBlCXSy/view">
            <Image
              src={downloadIcon}
              alt="download icon"
              className="hero__download-CV-icon"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
