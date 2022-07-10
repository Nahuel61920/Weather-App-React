import React from "react";
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
          <h2>Weather App</h2>
        </div>
      </NavLink>
      <NavLink
        to="/"
        style={(isActive) => ({
          color: isActive = "#00DDEB"
        })}
      >
        <div className={style.navAbout}>
          <h3>Home</h3>
        </div>
      </NavLink>
      <NavLink
        to="/about"
        style={(isActive) => ({
          color: isActive = "#00DDEB"
        })}
      >
        <div className={style.navAbout}>
          <h3>About</h3>
        </div>
      </NavLink>
        <div className={style.navSearch}>
        <SearchBar onSearch={onSearch} />
        </div>
    </div>
  );
}

export default Nav;
