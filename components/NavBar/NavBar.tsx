import "./NavBar.scss";
import Logo from "../../public/assets/logos/Charlie_Tait.png";
import Image from "next/image";
import Link from "next/link";
function NavBar() {
    return (
        <nav className = "nav">
            <div className="nav__wrapper">
                <Link href = "/"><Image src = {Logo} alt = "logo" className="nav__logo" /></Link>
            </div>
        </nav>
      );
}

export default NavBar;