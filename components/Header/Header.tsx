import Hero from "../Hero/Hero";
import NavBar from "../NavBar/NavBar";
import "./Header.scss";
import portfolioImage from "../../public/assets/images/Charlie_Tait_edited.png";
import Image from "next/image";

function Header() {
  return (
    <header className="header">
      <NavBar />
      <div className="header__container">
        <div className="header__wrapper">
          <div className="header__text-container">
            <Hero />
          </div>
          <div className="header__image-container">
            <Image
              src={portfolioImage}
              className="header__image"
              alt="portfolio image"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
