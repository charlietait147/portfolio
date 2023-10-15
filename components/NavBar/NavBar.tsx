import "./NavBar.scss";
import Logo from "../../public/assets/logos/Charlie_Tait.png";
import Image from "next/image";
import Link from "next/link";
function NavBar() {
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <Link href="/">
          <Image src={Logo} alt="logo" className="nav__logo" />
        </Link>
        <ul className="nav__list">
          <a href="/#about" className="nav__item">
            About
          </a>
          <a href="/#skills" className="nav__item">
            Skills
          </a>
          <a href="/#projects" className="nav__item">
            Projects
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
