"use client";
import "./WeatherAppContent.scss";
import Image from "next/image";
import Link from "next/link";
import CIcon from "@coreui/icons-react";
import { cibGithub } from "@coreui/icons";
import weatherAppImg from "../../public/assets/images/weather-app-screenshot.png";

function WeatherAppContent() {
  return (
    <main className="weather-app-content">
      <header className="weather-app-content__header">
        <div className="weather-app-content__header-wrapper">
          <div className="weather-app-content__title-container">
            <h1 className="weather-app-content__title">DFCorp Weather App</h1>
          </div>
          <p className="weather-app-content__tagline">
            {" "}
            A weather app that fetches data from OpenWeather API and allows
            users to log in and search for the weather in any location.
          </p>
          <div className="weather-app-content__main-image-container">
            <Image
              src={weatherAppImg}
              alt="DFCorp weather app snippet"
              className="weather-app-content__main-image"
            />
          </div>
        </div>
      </header>
      <section id="tech-stack" className="weather-app-content__section">
        <h2 className="weather-app-content__section-title">Tech Stack</h2>
        <div className="weather-app-content__tech-container">
          <ul className="weather-app-content__tech-list">
            <li className="weather-app-content__tech-item">React</li>
            <li className="weather-app-content__tech-item">Bootstrap</li>
            <li className="weather-app-content__tech-item">Node JS</li>
            <li className="weather-app-content__tech-item">Mongoose</li>
            <li className="weather-app-content__tech-item">MongoDB</li>
            <li className="weather-app-content__tech-item">Canva</li>
            <li className="weather-app-content__tech-item">Axios</li>
            <li className="weather-app-content__tech-item">API</li>
          </ul>
        </div>
        <ul className="weather-app-content__links-list">
          <div className="weather-app-content__link-container">
            <li className="weather-app-content__item">
              <Link
                className="weather-app-content__link"
                href="https://github.com/charlietait147/weather-application"
              >
                GitHub
              </Link>
            </li>
            <Link href="https://github.com/charlietait147/weather-application">
              <CIcon icon={cibGithub} className="weather-app-content__icon" />
            </Link>
          </div>
        </ul>
      </section>
    </main>
  );
}

export default WeatherAppContent;
