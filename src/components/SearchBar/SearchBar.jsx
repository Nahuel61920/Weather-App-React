import React, { useState } from "react";
import style from './searchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <div className={style.search}>
      <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}>
        <input
          type="text"
          placeholder="City..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {/* <input className={style.buttonSearch} type="submit" value="Agregar" /> */}
        <button className={style.buttonSearch}> 
          <span class="text">Add</span>
        </button>

      </form>
    </div>
  );
}

