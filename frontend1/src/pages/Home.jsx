import React from "react";
import Products from "../components/Products";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <>
    
      <div className="header">
        <div className="header-info">
          <p className="description">Decodificando</p>
          <p className="description2"> mundo dos sonhos</p>
          <p className="header-info2">
            Na Dreams Tech Corporation, a pessoa se <br /> cadastra e pode
            escolher um dos cenários <br />
            estabelecidos ou personalizar seu próprio <br /> cenário e em qual
            época quer viver uma <br /> realidade alternativa em seu Dreams
            <br /> Connect.
          </p>          
        </div>       
      </div>

      <div className="products-home">
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <Products />
      </div>
    </>
  );
}
