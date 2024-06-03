"use client";
import "./WeatherAppContent.scss";
import Image from "next/image";
import Link from "next/link";
import CIcon from "@coreui/icons-react";
import { cibGithub } from "@coreui/icons";
import weatherAppImg from "../../public/assets/images/weather-app-screenshot.png";
import loginForm from "../../public/assets/images/register-login-page.png";
import dublinWeatherPage from "../../public/assets/images/dublin-search.png";
import dublinWeatherPageFavouritesTicked from "../../public/assets/images/dublin-search-added.png";
import favouriteLocations from "../../public/assets/images/favourite-locations.png";

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
            <li className="weather-app-content__tech-item">Chai</li>
            <li className="weather-app-content__tech-item">Mocha</li>
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
      <section id="background" className="weather-app-content__section">
        <h2 className="weather-app-content__section-title">Background</h2>
        <p className="weather-app-content__text">
          As part of the Digital Futures Bootcamp, I was tasked with creating a
          travel information application to display a 5 day weather forecast for
          any searchable location with the added functionality to be able to
          save favourite locations. In addition, I was required to build a set
          of backend services that will allow the application to have individual
          users that can log in and use their favourite locations.
        </p>
      </section>
      <section id="screenshots" className="weather-app-content__section">
        <h2 className="weather-app-content__section-title">Screenshots</h2>
        <div className="weather-app-content__screenshot-container">
          <Image
            src={loginForm}
            alt="screenshot of login form"
            className="weather-app-content__screenshot"
          />
          <Image
            src={dublinWeatherPage}
            alt="screenshot of dublin weather page"
            className="weather-app-content__screenshot"
          />
          <Image
            src={dublinWeatherPageFavouritesTicked}
            alt="screenshot of dublin weather page with favourites ticked"
            className="weather-app-content__screenshot"
          />
          <Image
            src={favouriteLocations}
            alt="screenshot of favourite locations page"
            className="weather-app-content__screenshot"
          />
        </div>
      </section>
      <section id="challenges" className="weather-app-content__section">
        <h2 className="weather-app-content__section-title">Challenges</h2>
        <h4 className="weather-app-content__subtitle">
          Extracting and saving a user&#39;s favourite location
        </h4>
        <ul className="weather-app-content__section-list">
          <li className="weather-app-content__text">
            I faced a significant challenge in extracting and saving a user&#39;s
            favorite locations so that they persisted on their profile. To
            address this, I initially stored user data, including their name,
            password, ID, and favorite locations (initially empty), in a local
            storage object. This allowed for quick access and manipulation of
            user data within the application.
          </li>
          <br />
          <li className="weather-app-content__text">
            To maintain a clean architecture, I separated my services into a
            dedicated service file. On the front-end client, I implemented add
            and fetch API calls to interact with a back-end Node.js server. This
            server, in turn, communicated with a MongoDB database to store and
            retrieve user data.
          </li>
          <br />
          <li className="weather-app-content__text">
            When it came to displaying the favorite locations, I extracted the
            user ID and locations from the token and passed this data to the
            favorite locations page. I then used the user ID in the imported
            fetch service to retrieve the relevant data and mapped over the
            locations to display them on the page.
          </li>
          <br />
          <li className="weather-app-content__text">
            For saving favorite locations, I passed down the user ID along with
            the country name, which was extracted from the user search input.
            After updating the back-end, I also updated the local state to
            ensure the changes were reflected and saved on the user&#39;s device,
            providing a seamless user experience.
          </li>
        </ul>
        <h4 className="weather-app-content__subtitle">
          Hiding the navbar on the login and register page.
        </h4>
        <ul className="weather-app-content__section-list">
          <li className="weather-app-content__text">
            In my project, I faced a challenge where I needed to hide the navbar
            on both the login and register pages. Initially, my navbar
            surrounded the entire application, so I had to find a way to
            conditionally hide it based on whether the user was on the login or
            register page. This was crucial to ensure that users registered and
            logged in before accessing features like favorite locations or the
            search input to find a location.
          </li>
          <br />
          <li className="weather-app-content__text">
            After conducting some research, I found that I could use the
            location hook within a conditional statement to control the navbar&#39;s
            visibility. By utilizing the pathname property of the location hook,
            I set the show navbar state to false when the pathname matched the
            login or register page URLs, and true otherwise.
          </li>
          <br />
          <li className="weather-app-content__text">
            To implement this, I placed the logic inside a useEffect hook and
            configured it to trigger whenever the pathname changed. This ensured
            that the navbar&#39;s visibility was appropriately managed based on the
            current page.
          </li>
        </ul>
        <h4 className="weather-app-content__subtitle">
          Testing that the location search was working correctly
        </h4>
        <ul className="weather-app-content__section-list">
          <li className="weather-app-content__text">
            I faced a challenge in testing that when a user entered a country
            name into the search bar on the home page, they would be taken to
            the corresponding page. After extensive research online, I
            discovered a solution that involved mocking the entire
            react-router-dom library using the mocking function from vitest.
          </li>
          <br />
          <li className="weather-app-content__text">
            By mocking the useNavigate hook, I was able to simulate navigation
            in my tests. This allowed me to assert that the mockNavigate
            function was called with the correct expected path when a user
            entered a country name and clicked the search button.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default WeatherAppContent;
