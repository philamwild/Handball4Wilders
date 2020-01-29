import React from "react";
import "./style/Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <h1>Handball 4 Wilders</h1>
        <ul>
          <li>Chaussures</li>
          <li>Ballons</li>
          <li>Textile</li>
          <li>Equipements</li>
        </ul>
        <div className="navbar-icons">
          <i class="fa fa-user-circle fa-2x"></i>
          <i class="fa fa-shopping-basket fa-2x"></i>
        </div>
      </div>
    </div>
  );
}
