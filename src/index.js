import React from 'react';
import  ReactDOM  from 'react-dom';

const caja = {

  tipo:'text',
  ph:'teclea texto',
  link:'https://www.google.com',
  tg:'_blank' 
}

function muestracaja(){

  return <div><input type={caja.tipo} placeholder={caja.ph}></input></div>
}

function muestralink(){

  return <div><a href={caja.link} target={caja.tg}>Google </a></div>
}


const elemento =(

  <div>{muestracaja()}
  {muestralink()}</div>
)

// quiero que vayas y obtengas el elemento root 
const container = document.getElementById('root');

// que quiero mostrar y en donde 
ReactDOM.render(elemento, container);