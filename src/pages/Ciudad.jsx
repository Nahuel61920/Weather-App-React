import React from "react";
import { useParams } from "react-router-dom";

import style from "./ciudad.module.css";

export default function Ciudad({ onFilter }) {
    const { id } = useParams();
    const city = onFilter(id);
    return (
        <div className={style.cities}>
            <div className={style.cityContainer}>
                <h2 className={style.titleCity}>{city.name}</h2>
                <div className={style.info}>
                    <div>Temperatura: {city.temp} ºC</div>
                    <div>Clima: {city.weather}</div>
                    <div>Viento: {city.wind} km/h</div>
                    <div>Cantidad de nubes: {city.clouds}</div>
                    <div>Latitud: {city.latitud}º</div>
                    <div>Longitud: {city.longitud}º</div>
                </div>
            </div>
        </div >
    )
}
