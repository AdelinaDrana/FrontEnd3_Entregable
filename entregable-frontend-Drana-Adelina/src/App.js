
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  const contadorTotalCompras = () => {
    setCount(prevState => prevState + 1)
  }
  return (
    <div className="App">
      <Cabecera contadorEnCero={count} />
      <Listado contadorTotalCompras={contadorTotalCompras} />
    </div>
  );
}

export default App;
