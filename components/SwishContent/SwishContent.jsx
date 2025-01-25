"use client";
import "./SwishContent.scss";
import Image from "next/image";
import Link from "next/link";
import CIcon from "@coreui/icons-react";
import { cibGithub } from "@coreui/icons";
import swishImg from "../../public/assets/images/swish-app-screenshot.png";

function SwishContent() {
  return (
    <main className="swish-content">
      <header className="swish-content__header">
        <div className="swish-content__header-wrapper">
          <div className="swish-content__title-container">
            <h1 className="swish-content__title">Swish .</h1>
          </div>
          <p className="swish-content__tagline">
            A database-driven café recommendation engine featuring user
            registration, reviews and favourite cafes
          </p>
          <div className="swish-content__main-image-container">
            <Image
              src={swishImg}
              alt="Swish app snippet"
              className="swish-content__main-image"
            />
          </div>
        </div>
      </header>
    </main>
  );
}

export default SwishContent;
