"use client"
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
            A thesaurus app powered by Thesaurus API. It fetches a list of 12 synonyms for words with colour co-ordinations.
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
            <li className="expansion-content__tech-item">Tailwind</li>
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
                href="https://github.com/charlietait147/HomeEcoEarner-client"
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
         I wanted to challenge myself by using both Typescript to fetch data from an API and Tailwind CSS to design a nice user interface. I decided to create a new Thesaurus app, using the Thesaurus API from API Ninjas. 
        </p>
      </section>
      <section id="challenges" className="expansion-content__section">
      <h2 className="expansion-content__section-title">Challenges</h2>
      <h4 className="expansion-content__subtitle">Using TypeScript with Axios</h4>
      <li className="project-content__text">
        1
      </li>

      </section>
    </main>
  );
}

export default ExpansionContent;
