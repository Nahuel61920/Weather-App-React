import React from 'react';
import style from './about.module.css';

export default function About() {
    return (
        <div className={style.sectionAbout}>
            <div className={style.containerAbout}>
                <h1 className={style.titleAbout}>About</h1>
                <div className={style.about}>
                    <p>Me llamo Esteban Nahuel Carrizo y desarrolle esta weather app con React para el m2 del bootcamp Soy henry</p>
                    <p>La misma consume datos de una api y usa la libreria react-router-dom para manejar las rutas de la aplicacion</p>
                    <p>Para los estilos decidi implemetar CSS modules para una mejor funcionalidad</p>
                </div>
            </div>
        </div>
    )
}
