import "./Projects.scss";
import Image from "next/image";
import homeEcoEarnerImg from "../../public/assets/images/HomeEcoEarner.png";
import expansionImg from "../../public/assets/images/expansion-edited.png";
import weatherAppImg from "../../public/assets/images/weather-app-screenshot.png";
import Link from "next/link";

function Projects() {
  return (
    <section id="projects">
      <div className="projects__title-container">
        <h3 className="projects__title">Projects</h3>
      </div>
      <div className="projects__projects-container">
        <div className="projects__project-container">
          <div className="projects__image-container">
            <Link href="/projects/home-ecoearner">
              <Image
                className="projects__snippet"
                src={homeEcoEarnerImg}
                alt="HomeEcoEarner project snippet"
              />
            </Link>
          </div>
          <div className="projects__description-container">
            <div className="projects__text-container">
              <h4 className="projects__text-title">
                Home{" "}
                <span className="projects__text-title projects__text-title--fill-green">
                  EcoEarner
                </span>
              </h4>
              <p className="projects__text-description">
                A development landing page and website of a start-up renewable
                energy company.
              </p>
            </div>
            <div className="projects__button-container">
              <a
                href="https://www.loom.com/share/bc62de47bc934b99a9aa7033c8365ae4"
                className="projects__button projects__button--demo"
              >
                WATCH DEMO
              </a>
              <a href="/projects/home-ecoearner" className="projects__button">
                MORE DETAILS
              </a>
            </div>
          </div>
        </div>
        <div className="projects__project-container">
          <div className="projects__image-container">
            <Link href="/projects/expansion">
              <Image
                className="projects__snippet"
                src={expansionImg}
                alt="expansion project snippet"
              />
            </Link>
          </div>
          <div className="projects__description-container">
            <div className="projects__text-container">
              <h4 className="projects__text-title projects__text-title--fill-red">
                expansion
              </h4>
              <p className="projects__text-description">
                A thesaurus app powered by Thesaurus API. It fetches a list of
                12 synonyms for words with colour co-ordinations.
              </p>
            </div>
            <div className="projects__button-container">
              <a
                href="https://expansion-zeta.vercel.app"
                className="projects__button projects__button--live-red"
              >
                SEE LIVE
              </a>
              <a href="/projects/expansion" className="projects__button">
                MORE DETAILS
              </a>
            </div>
          </div>
        </div>
        <div className="projects__project-container">
          <div className="projects__image-container">
            <Link href="/projects/dfcorp-weather-app">
            <Image
              className="projects__snippet"
              src={weatherAppImg}
              alt="weather app project snippet"
            />
            </Link>
          </div>
          <div className="projects__description-container">
            <div className="projects__text-container">
              <h4 className="projects__text-title projects__text-title--fill-blue">DFCorp Weather App</h4>
              <p className="projects__text-description">
                A weather app that fetches weather data from OpenWeather API.
              </p>
            </div>
            <div className="projects__button-container">
              {/* <a
                href="https://expansion-zeta.vercel.app"
                className="projects__button projects__button--live-blue"
              >
                SEE LIVE
              </a> */}
              <a href="/projects/dfcorp-weather-app" className="projects__button">
                MORE DETAILS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
