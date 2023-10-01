import React from 'react';
import  ReactDOM  from 'react-dom';


/* const mensaje =<div> Hola TIC</div>;

const carrera = 'TIC';
const alumno = 'El Altisimo'; */

const alumnotic = {

   nombre: 'natalia',
   apodo: 'naty',
   salon: 'TIC95'
}

function informacionalumno(alumnotic){

   return `Alumno : ${alumnotic.nombre} de apodo : ${alumnotic.apodo}`;
}

function salon(alumnotic){

  return ` : ${alumnotic.salon}`;
}

const elemento = <div>Hola {informacionalumno(alumnotic)} del salon {salon(alumnotic)}</div>;
// const elemento = <div>En la carrera de {carrera} esta el alumno {alumno}</div>;
// quiero que vayas y obtengas el elemento root 
const container = document.getElementById('root');

// que quiero mostrar y en donde 
ReactDOM.render(elemento, container);