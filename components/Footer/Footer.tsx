"use client";
import "./Footer.scss";
import CIcon from "@coreui/icons-react";
import { cibLinkedin, cibGithub, cibGmail } from "@coreui/icons";
import Link from "next/link";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__headline-container">
        <span className="footer__headline">Let&#39;s Connect</span>
      </div>
      <div className="footer__icon-container">
        <div className="footer__icon-background">
          <Link href="https://github.com/charlietait147"><CIcon icon={cibGithub} className="footer__icon" /></Link>
        </div>
        <div className="footer__icon-background">
          <Link href="mailto:charlietait1@gmail.com"><CIcon icon={cibGmail} className="footer__icon" /></Link>
        </div>
        <div className="footer__icon-background">
          <Link href="https://www.linkedin.com/in/charlie-tait/"><CIcon icon={cibLinkedin} className="footer__icon" /></Link>
        </div>
      </div>
      <div className="footer__email-container">
          <a href= "mailto:charlietait1@gmail.com" className="footer__email">charlietait1@gmail.com</a>
      </div>
      <div className="footer__copyright-container">
        <small className="footer__copyright">
          Created by{" "}
          <strong className="footer__copyright footer__copyright--bold">
            Charlie Tait
          </strong>{" "}
          &copy; 2023
        </small>
      </div>
    </footer>
  );
}

export default Footer;
