import React from "react";
import "./style/Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="left-part">
        <h3>Handball 4 Wilders</h3>
        <ul>
          <li>Qui sommes nous</li>
          <li>Contact</li>
          <li>Blabla</li>
          <li>Blabla</li>
        </ul>
      </div>
      <div className="right-part">
        <h3>Abonnez-vous à la newsletter:</h3>
        <input placeholder="Rentrer votre adresse email"></input>
        <h3>Suivez nous</h3>
        <i class="fa fa-facebook fa-3x"></i>
        <i class="fa fa-twitter fa-3x"></i>
        <i class="fa fa-instagram fa-3x"></i>
        <i class="fa fa-youtube fa-3x"></i>
        <i class="fa fa-linkedin fa-3x"></i>
      </div>
    </div>
  );
}
