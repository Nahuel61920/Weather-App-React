import React from "react";
import Logo from "../../logoHenry.png";
import SearchBar from "../SearchBar/SearchBar";
import style from "./nav.module.css";
import { NavLink } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <div className={style.nav}>
      <NavLink
        to="/"
        style={(isActive) => ({
          textDecoration: isActive = "none" 
        })}
      >
        <div className={style.navTitle}>
          <img src={Logo} alt="logo" className={style.logo} />
          <h2>Henry - Weather App</h2>
        </div>
      </NavLink>
      <NavLink
        to="/about"
        style={(isActive) => ({
          color: isActive = "rgba(9, 90, 121, 1)"
        })}
      >
        <div className={style.navAbout}>
          <h3>About</h3>
        </div>
      </NavLink>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
