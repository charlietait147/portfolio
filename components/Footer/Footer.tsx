"use client";
import "./Footer.scss";
import CIcon from "@coreui/icons-react";
import { cibLinkedin, cibGithub, cibGmail } from "@coreui/icons";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__headline-container">
        <span className="footer__headline">Let's Connect</span>
      </div>
      <div className="footer__icon-container">
        <CIcon icon={cibGithub} className="footer__icon" />
        <CIcon icon={cibGmail} className="footer__icon" />
        <CIcon icon={cibLinkedin} className="footer__icon" />
      </div>
      <p className="footer__email">charlietait1@gmail.com</p>
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
