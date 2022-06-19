
import React from "react";
import { useState } from "react";


export default function Item({ contadorTotalCompras, nombre, descripcion, stock, imagen }) {
  const [productoStock, setStock] = useState(stock);
  const comprar = () => {
    setStock(prevState => prevState - 1)
  }

  return (
    <div className="item">
      <h3> <a href="#" className="titulo"> {nombre}</a></h3>
      <img src={imagen} alt={nombre} />    
      <p>{descripcion}</p>
      <h5 className="stock">Stock: <span>{productoStock > 0 ? productoStock : "-"}</span></h5>
      <button className="boton" disabled={productoStock === 0} onClick={() => { comprar(); contadorTotalCompras() }}>{productoStock === 0 ? "Sin stock" : "comprar"}</button>
    </div>
  )
}
