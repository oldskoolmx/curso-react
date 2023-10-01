import React from 'react';
import  ReactDOM  from 'react-dom';


const dinero = 200;
const producto1 = {
  nombre: 'Pelotas',
  costo: 300
}
const producto2 = {
  nombre: 'casas',
  costo: 100
}

function mealcanza(money) {
  if(money===300)
  {
    return <h1>Si me alcanza para {producto1.nombre} de {producto1.costo} pesos</h1>
  }
  else {
    return <h1>Solo me alcanza para {producto2.nombre} de {producto2.costo} pesos</h1>
  }
  // return <h1>{money}</h1>
}

const elemento =<div>{mealcanza(dinero)}</div>
// quiero que vayas y obtengas el elemento root 
const container = document.getElementById('root');

// que quiero mostrar y en donde 
ReactDOM.render(elemento, container);