
import "./Projects.scss";
import Image from "next/image";
import homeEcoEarnerImg from "../../public/assets/images/HomeEcoEarner.png";

function Projects() {
  return (
    <section className="projects">
      <div className="projects__title-container">
        <h3 className="projects__title">Projects</h3>
      </div>
      <div className="projects__projects-container">
        <Image
          className="projects__home-eco"
          src={homeEcoEarnerImg}
          alt="HomeEcoEarner project snippet"
        />
        <div className="projects__text-container">
          <h4 className="projects__text-title">
            Home{" "}
            <span className="projects__text-title projects__text-title--green">
              EcoEarner
            </span>
          </h4>
          <p className="projects__text-description">
            A development landing page and website of a start-up renewable
            energy company.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
