"use client";
import "./SwishContent.scss";
import Image from "next/image";
import Link from "next/link";
import CIcon from "@coreui/icons-react";
import { cibGithub } from "@coreui/icons";
import swishImg from "../../public/assets/images/swish-app-screenshot.png";

function SwishContent() {
  return (
    <main className="swish-content">
      <header className="swish-content__header">
        <div className="swish-content__header-wrapper">
          <div className="swish-content__title-container">
            <h1 className="swish-content__title">Swish .</h1>
          </div>
          <p className="swish-content__tagline">
            A database-driven café recommendation engine featuring user
            registration, reviews and favourite cafes
          </p>
          <div className="swish-content__main-image-container">
            <Image
              src={swishImg}
              alt="Swish app snippet"
              className="swish-content__main-image"
            />
          </div>
        </div>
      </header>
      <section id="tech-stack" className="swish-content__section">
        <h2 className="swish-content__section-title">Tech Stack</h2>
        <div className="swish-content__tech-container">
          <ul className="swish-content__tech-list">
            <li className="swish-content__tech-item">Next.js</li>
            <li className="swish-content__tech-item">Tailwind CSS</li>
            <li className="swish-content__tech-item">Node JS</li>
            <li className="swish-content__tech-item">Mongoose</li>
            <li className="swish-content__tech-item">MongoDB</li>
            <li className="swish-content__tech-item">Jest</li>
            <li className="swish-content__tech-item">
              React Testing Library
            </li>
            <li className="swish-content__tech-item">Mocha</li>
            <li className="swish-content__tech-item">Chai</li>
          </ul>
        </div>
        <ul className="swish-content__links-list">
          <div className="swish-content__link-container">
            <li className="swish-content__item">
              <Link
                className="swish-content__link"
                href="https://github.com/charlietait147/swish"
              >
                GitHub
              </Link>
            </li>
            <Link href="https://github.com/charlietait147/swish">
              <CIcon icon={cibGithub} className="swish-content__icon" />
            </Link>
          </div>
        </ul>
      </section>
    </main>
  );
}

export default SwishContent;
