
import React from 'react'


export default function Cabecera({ contadorEnCero }) {
  return (
    <header>
      <h1>Carrito de compras</h1>
      <p>Total de compras: <span>{contadorEnCero}</span></p>
    </header>
  )
}
