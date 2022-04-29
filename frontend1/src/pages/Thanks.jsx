import React, { Component } from 'react';
import "../css/Teste.css";
import aboutImg from "../images/brain.svg";

export default class Thanks extends Component {
  render() {
    return (
      <>
        <div className="header-info3">
          <h1 className="description3">DREAM TECH</h1>
          <h2 className="description4">Decodificando o mundo dos sonhos</h2>
          <h2 className="paragraph-description">Obrigado e tenha uma otima realidade alternativa no mundo dos sonhos.</h2>
          <div className="about-img">
            <img className="img-brain" src={aboutImg} alt="" />
          </div>
        
        </div>
      </>
      
    )
  }
}
