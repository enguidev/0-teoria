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
import { Mensaje } from "./components/Mensaje";
function App() {
  return (
    <div>
      {/* Mensaje con icono */}
      <Mensaje tipo="exito" texto="Operación exitosa" mostrarIcono={true} />
      {/* Renderiza: <div class="mensaje-exito"><span>📌</span><p>Operación exitosa</p></div> */}

      {/* Mensaje sin icono */}
      <Mensaje tipo="info" texto="Información general" mostrarIcono={false} />
      {/* Renderiza: <div class="mensaje-info"><p>Información general</p></div> */}

      {/* Usando shorthand (equivalente a mostrarIcono={true}) */}
      <Mensaje tipo="error" texto="Error al procesar" mostrarIcono />

      {/* Sin especificar mostrarIcono (será undefined, que es falsy) */}
      <Mensaje tipo="advertencia" texto="Advertencia" />
      {/* No muestra el icono porque mostrarIcono es undefined */}
    </div>
  );
}
export default App;
