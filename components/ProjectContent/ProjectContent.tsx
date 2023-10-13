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
            Add more pages such as a contact page which would contain a enquiry
            form as well as a news page which would list news articles that the
            company could write up.{" "}
          </li>
          <li className="project-content__item-outline">
            Present a way of visually seeing users in a database that have
            joined the waiting list, through the use of an admin page.
          </li>
        </ol>
      </section>
      <section id="screenshots" className="project-content__section">
        <h2 className="project-content__section-title">Screenshots</h2>
        <div className="project-content__screenshot-container">
          <Image
            src={waitingListForm}
            alt="screenshot of waiting list form modal"
            className="project-content__screenshot"
          />
          <Image
            src={newsPage}
            alt="screenshot of news page"
            className="project-content__screenshot"
          />
          <Image
            src={contactPage}
            alt="screenshot of contact page"
            className="project-content__screenshot"
          />
          <Image
            src={adminLoginPage}
            alt="screenshot of admin login page"
            className="project-content__screenshot"
          />
          <Image
            src={adminDatabase}
            alt="screenshot of admin database"
            className="project-content__screenshot"
          />
        </div>
      </section>
      <section id="challenges" className="project-content__section">
        <h2 className="project-content__section-title">Challenges</h2>
        <h4 className="project-content__subtitle">Admin Authorisation</h4>
        <p className="project-content__text">
          It was tough to find the right way to ensure one admin user could log
          in to an admin database. But I found that I could store a username and
          password in an env file on the backend server and send this down to
          the client. When the admin enters the correct password, this would
          take them to the database. <br />
          <br />
          However, this wasn't a good user experience, as they would be logged
          out if they were to accidentally refresh the page. I ended up using a
          JWT token in local storage, which would give an admin the token when
          they entered the correct username and password. This means that a
          refresh wouldnt log them out of the page. I further added a log out
          button so they could securely log out, which in turn removes the token
          from local storage.
        </p>
        <h4 className="project-content__subtitle">Dynamic Filtering</h4>
        <p className="project-content__text">
          In both the news page and the admin database, I wanted to ensure
          effortless searching for news articles or user profiles. Users and
          administrators can initiate a search by typing in a search bar, with
          results displayed in real-time. When the search input is cleared, the
          list should revert to the full set of users or news articles. <br />
          <br />
          Being new to this task, I carried out some research and determined
          that a filter function was the most suitable solution. This function
          would filter results based on the user's input. To provide the
          effective searching, I stored the list in the application's state and
          targetted properties containing matching letters. I also learned to
          manage the reset functionality by establishing an additional state
          that reverts to the full list when the input is empty, ensuring a
          smooth experience for resetting search results.
        </p>
      </section>
    </main>
  );
}

export default ProjectContent;
