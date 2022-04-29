import React from "react";
import aboutImg from "../images/brain.svg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about">
      <div className="inside-container">
        <div className="about-center">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>

          <div className="about-info">
            <p>
              Na Dreams Tech Corporation, a pessoa se cadastra e pode escolher
              um dos cenários estabelecidos ou personalizar seu próprio cenário
              e em qual época quer viver uma realidade alternativa em seu sonho
              - <span className="title-h1">Dreams Connect.</span>
            </p>

            <div className="but-options">
              <Link to="/products">
                <button className="back-products"><span>Dreams Tech</span></button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
