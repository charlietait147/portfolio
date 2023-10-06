import "./ProjectContent.scss";
import Image from "next/image";
import homeEcoEarnerImg from "../../public/assets/images/HomeEcoEarner.png";
import waitingListForm from "../../public/assets/images/WaitingListForm.png";
import newsPage from "../../public/assets/images/NewsPage.png";
import contactPage from "../../public/assets/images/ContactPage.png";
import adminLoginPage from "../../public/assets/images/AdminLoginPage.png";
import adminDatabase from "../../public/assets/images/AdminDatabase.png";
function ProjectContent() {
  return (
    <main className="project-content">
      <header className="project-content__header">
        <div className="project-content__title-container">
          <h1 className="project-content__title">
            Home{" "}
            <strong className="project-content__title project-content__title--green">
              EcoEarner
            </strong>
          </h1>
        </div>
        <p className="project-content__tagline">
          {" "}
          A development landing page and website of a start-up renewable energy
          company.
        </p>
        <div className="project-content__main-image-container">
          <Image
            src={homeEcoEarnerImg}
            alt="home eco earner snippet"
            className="project-content__main-image"
          />
        </div>
      </header>
      <section id="tech-stack" className="project-content__section">
        <h2 className="project-content__section-title">Tech Stack</h2>
        <div className="project-content__tech-container">
          <ul className="project-content__tech-list">
            <li className="project-content__tech-item">React JS</li>
            <li className="project-content__tech-item">Node JS</li>
            <li className="project-content__tech-item">Express</li>
            <li className="project-content__tech-item">Knex</li>
            <li className="project-content__tech-item">Sass</li>
            <li className="project-content__tech-item">Auth</li>
            <li className="project-content__tech-item">MySQL</li>
            <li className="project-content__tech-item">CoreUI</li>
            <li className="project-content__tech-item">API</li>
          </ul>
        </div>
      </section>
      <section id="background" className="project-content__section">
        <h2 className="project-content__section-title">Background</h2>
        <p className="project-content__text">
          My Dad will be launching a renewable energy start-up company in the
          last quarter of 2023. I saw the opportunity to:
        </p>
        <ol className="project-content__list-outline">
          <li className="project-content__item-outline">
            Build on the design of an already existing landing page.
          </li>
          <li className="project-content__item-outline">
            Help integrate a database which would collect a users' users' name,
            email and postcode as they sign up to join the waiting list in
            advance of the company's launch.
          </li>
          <li className="project-content__item-outline">
            Further add more pages such as a contact page which would contain a
            enquiry form as well as a news page which would list news articles
            that the company could write up.{" "}
          </li>
        </ol>
      </section>
      <section id="page-components" className="project-content__section">
        <h2 className="project-content__section-title">Page Components</h2>
        <div className="project-content__page-components-wrapper">
          <div className="project-content__page-component-container">
            <Image
              src={waitingListForm}
              alt="screenshot of waiting list form modal"
              className="project-content__screenshot"
            />
            <p className="project-content__text">
              The waiting list form where users would input their details to
              join the waiting list.
            </p>
          </div>
          <div className="project-content__page-component-container">
            <Image
              src={newsPage}
              alt="screenshot of news page"
              className="project-content__screenshot"
            />
            <p className="project-content__text">
              The news page, where users can search news articles, sorted by date. 
            </p>
          </div>
          <div className="project-content__page-component-container">
            <Image
              src={contactPage}
              alt="screenshot of contact page"
              className="project-content__screenshot"
            />
            <p className="project-content__text">
              The contact page where users can send an enquiry, which I receive in my email.
            </p>
          </div>
          <div className="project-content__page-component-container">
            <Image
              src={adminLoginPage}
              alt="screenshot of admin login page"
              className="project-content__screenshot"
            />
            <p className="project-content__text">
              An admin login page where an admin who holds the correct login and password can log into a visual database of users.
            </p>
          </div>
          <div className="project-content__page-component-container">
            <Image
              src={adminDatabase}
              alt="screenshot of admin database"
              className="project-content__screenshot"
            />
            <p className="project-content__text">
              The waiting list form where users would input their details to
              join the waiting list.
            </p>
          </div>
        </div>
      </section>
      <section id="challenges" className="project-content__section">
        <h2 className="project-content__section-title">Challenges</h2>
      </section>
    </main>
  );
}

export default ProjectContent;
