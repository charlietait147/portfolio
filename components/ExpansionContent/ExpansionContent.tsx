"use client";
import Image from "next/image";
import expansionImg from "../../public/assets/images/expansion-edited.png";
import CIcon from "@coreui/icons-react";
import { cilMediaPlay, cibGithub } from "@coreui/icons";
import Link from "next/link";
import "./ExpansionContent.scss";
function ExpansionContent() {
  return (
    <main className="expansion-content">
      <header className="expansion-content__header">
        <div className="expansion-content__header-wrapper">
          <div className="expansion-content__title-container">
            <h1 className="expansion-content__title">expansion</h1>
          </div>
          <p className="expansion-content__tagline">
            {" "}
            A thesaurus app powered by Thesaurus API. It fetches a list of 12
            synonyms for words with colour co-ordinations.
          </p>
          <div className="expansion-content__main-image-container">
            <Image
              src={expansionImg}
              alt="home eco earner snippet"
              className="expansion-content__main-image"
            />
          </div>
        </div>
      </header>
      <section id="tech-stack" className="expansion-content__section">
        <h2 className="expansion-content__section-title">Tech Stack</h2>
        <div className="expansion-content__tech-container">
          <ul className="expansion-content__tech-list">
            <li className="expansion-content__tech-item">Next.js</li>
            <li className="expansion-content__tech-item">Typescript</li>
            <li className="expansion-content__tech-item">Tailwind CSS</li>
            <li className="expansion-content__tech-item">Heroicons</li>
            <li className="expansion-content__tech-item">Axios</li>
            <li className="expansion-content__tech-item">API</li>
          </ul>
        </div>
        <ul className="expansion-content__links-list">
          <div className="expansion-content__link-container">
            <li className="expansion-content__item">
              <Link
                className="expansion-content__link"
                href="https://expansion-zeta.vercel.app"
              >
                Live Website
              </Link>
            </li>
            <Link href="https://expansion-zeta.vercel.app">
              <CIcon icon={cilMediaPlay} className="expansion-content__icon" />
            </Link>
          </div>
          <div className="expansion-content__link-container">
            <li className="expansion-content__item">
              <Link
                className="expansion-content__link"
                href="https://github.com/charlietait147/expansion"
              >
                GitHub
              </Link>
            </li>
            <Link href="https://github.com/charlietait147/expansion">
              <CIcon icon={cibGithub} className="expansion-content__icon" />
            </Link>
          </div>
        </ul>
      </section>
      <section id="background" className="expansion-content__section">
        <h2 className="expansion-content__section-title">Background</h2>
        <p className="expansion-content__text">
          I wanted to challenge myself by using both Typescript to fetch data
          from an API and Tailwind CSS to design an attractive user interface. I
          decided to create a new Thesaurus app, using the Thesaurus API from
          API Ninjas.
        </p>
      </section>
      <section id="challenges" className="expansion-content__section">
        <h2 className="expansion-content__section-title">Challenges</h2>
        <h4 className="expansion-content__subtitle">
          Using TypeScript with Axios and event handlers
        </h4>
        <ul className="expansion-content__section-list">
          <li className="expansion-content__text">
            Accustomed to working with plain JavaScript, I had to delve into the
            structure of API requests with TypeScript due to encountering
            declaration errors. Following my research, I created an interface
            specifying the structure of the data I intended to fetch, including
            the word and an array of synonyms.I defined their types within the
            interface and put the interface into the state, allowing me to
            access it for displaying content on the page. I also ensured that this could be null, considering that there would be no
            data available before the API request. Additionally, I explicitly
            associated the interface with the GET request.
          </li>
          <br />
          <li className="expansion-content__text">
            I also ensured that I specifically defined the search bar submit
            event, by importing React's form event. To handle the onChange
            event, I imported React's Change Event.
          </li>
        </ul>
        <h4 className="expansion-content__subtitle">
          Clearing the search input
        </h4>
        <ul className="expansion-content__section-list">
          <li className="expansion-content__text">
            I encountered difficulties initially, thinking that the trim
            function would eliminate all characters and whitespace, only to
            discover that it exclusively removes whitespace. Following some
            research, I determined that the replace function was more suitable
            for replacing both lowercase and uppercase characters, along with
            whitespace, using an empty string.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default ExpansionContent;
