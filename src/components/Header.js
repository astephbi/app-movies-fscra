import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Acceuil</li>
          </NavLink>

          <NavLink
            to="coup2coeur"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Préférés</li>
          </NavLink>
        </ul>
      </nav>
      <h1>MON APP MOVIES</h1>
    </div>
  );
};

export default Header;
