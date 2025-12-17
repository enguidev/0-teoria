// import { MyRoutes } from "./routers/router";
// import { ComponenteHijo } from "./components/ComponenteHijo";
// import { BotonAccion } from "./components/BotonAccion.jsx";
// import { ItemLista } from "./components/ItemLista";
// import { Layout } from "./components/Layout";
// import { Perfil } from "./components/Perfil";
// import { Saludo } from "./components/Saludo";
// import { Boton } from "./components/Boton";
// import { Alerta } from "./components/Alerta";
// import imagenCheck from "./assets/check.svg";
// import { Caja } from "./components/Caja";
// import { Etiqueta } from "./components/Etiqueta";
// import { Mensaje } from "./components/Mensaje";
// import { ListaConRender } from "./components/ListaConRender";
// import { Contenedor } from "./components/Contenedor";
// import { Contenedor } from "./components/Contenedor";
// import { Componente1 } from "./components/Componente1";
// ✅ Importamos el Context desde el archivo de contexts
// import { TemaContext } from "./contexts/TemaContext";
import { useRef } from "react";
import { InputPersonalizado } from "./components/InputPersonalizado";

function App() {
  // Creamos una ref que apuntará al input
  const inputRef = useRef();

  // Función que usa la ref para controlar el input
  const enfocarInput = () => {
    // .current accede al elemento DOM real
    // .focus() es un método nativo del DOM
    inputRef.current.focus();
  };

  const limpiarInput = () => {
    // También podemos cambiar el valor
    inputRef.current.value = "";
  };

  const obtenerValor = () => {
    // O leer el valor directamente del DOM
    alert(`Valor: ${inputRef.current.value}`);
  };

  return (
    <div>
      {/* Pasamos la ref al componente personalizado */}
      <InputPersonalizado
        ref={inputRef} // Pasamos la ref
        placeholder="Escribe aquí" // Props adicionales
        type="text"
      />

      {/* Botones que controlan el input mediante la ref */}
      <button onClick={enfocarInput}>Enfocar input</button>
      <button onClick={limpiarInput}>Limpiar</button>
      <button onClick={obtenerValor}>Obtener valor</button>
    </div>
  );
}

export default App;
