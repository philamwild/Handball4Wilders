import React from "react";
import "./style/Navbar.scss";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <NavLink to="/">
          <h1>Handball 4 Wilders</h1>
        </NavLink>
        <ul>
          <NavLink to="/shoes">Chaussures</NavLink>
          <NavLink to="/ball">Ballons</NavLink>
          <NavLink to="/textile">Textile</NavLink>
          <NavLink to="/equipment">Equipements</NavLink>
        </ul>
        <div className="navbar-icons">
          <i class="fa fa-user-circle fa-2x"></i>
          <i class="fa fa-shopping-basket fa-2x"></i>
        </div>
      </div>
    </div>
  );
}
