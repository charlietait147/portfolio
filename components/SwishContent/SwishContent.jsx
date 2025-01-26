"use client";
import "./SwishContent.scss";
import Image from "next/image";
import Link from "next/link";
import CIcon from "@coreui/icons-react";
import { cibGithub } from "@coreui/icons";
import swishImg from "../../public/assets/images/swish-app-screenshot.png";
import signInModal from "../../public/assets/images/swish-sign-in-modal.png";
import signUpForm from "../../public/assets/images/swish-sign-in-form.png"
import cafePage from "../../public/assets/images/swish-cafe-page.png";
import cafePageReview from "../../public/assets/images/swish-posting-review.png";
import desktopDiscover from "../../public/assets/images/swish-desktop-discover.png";
import mobileDiscover from "../../public/assets/images/swish-mobile-discover.png";
import mobileFilters from "../../public/assets/images/swish-mobile-filters.png";
import accountInfo from "../../public/assets/images/swish-account-info.png";

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
            <li className="swish-content__tech-item">React Testing Library</li>
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
      <section id="background" className="swish-content__section">
        <h2 className="swish-content__section-title">Background</h2>
        <p className="swish-content__text">
          I wanted to leverage my skills in Next.js and Tailwind CSS to design
          an attractive, user-friendly café recommendation and review platform.
          I drew on my previous experience using MongoDB to build a database to
          manage users, cafés and reviews. To refine my testing abilities, I
          adopted a test-driven approach, in constructing tests for front-end
          components, services, back-end unit tests for MongoDB collections and
          integration tests to ensure seamless communication between the
          front-end client and back-end server. In the future, I am excited to
          develop a mobile application that incorporates the design elements of
          the web platform and features discounts for customers to use,
          enhancing user engagement.
        </p>
      </section>
      <section id="screenshots" className="swish-content__section">
        <h2 className="swish-content__section-title">Screenshots</h2>
        <div className="swish-content__screenshot-container">
            <Image src={signInModal} alt="screenshot of login modal" className="swish-content__screenshot" />
            <Image src={signUpForm} alt="screenshot of login form" className="swish-content__screenshot" />
            <Image src={desktopDiscover} alt="screenshot of discovery page on desktop" className="swish-content__screenshot" />
            <Image src={cafePage} alt="screenshot of cafe page on desktoop" className="swish-content__screenshot" />
            <Image src={cafePageReview} alt="screenshot of review post" className="swish-content__screenshot" />
            <Image src={mobileDiscover} alt="screenshot of discover page on mobile" className="swish-content__screenshot" />
            <Image src={mobileFilters} alt="screenshot of filters on mobile" className="swish-content__screenshot" />
            <Image src={accountInfo} alt="screenshot of account page" className="swish-content__screenshot" />
        </div>
      </section>
    </main>
  );
}

export default SwishContent;
