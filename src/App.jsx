// import { MyRoutes } from "./routers/router";
// import { ComponenteHijo } from "./components/ComponenteHijo";
// import { BotonAccion } from "./components/BotonAccion.jsx";
// import { ItemLista } from "./components/ItemLista";
// import { Layout } from "./components/Layout";
// import { Perfil } from "./components/Perfil";
// import { Saludo } from "./components/Saludo";
// import { Boton } from "./components/Boton";
import { Alerta } from "./components/Alerta";
import imagenCheck from "./assets/check.svg";
function App() {
  // Creamos componentes/elementos que pasaremos como props
  const iconoAdvertencia = <span style={{ fontSize: "24px" }}>⚠️</span>;
  const iconoError = <span style={{ color: "red" }}>❌</span>;
  return (
    // <MyRoutes/>

    <div>
      {/* Pasamos elementos JSX como props */}
      <Alerta icono={iconoAdvertencia} mensaje="Advertencia importante" />

      {/* Pasamos JSX inline */}
      <Alerta
        icono={<img src={imagenCheck} alt="OK" />}
        mensaje="Operación exitosa"
      />

      {/* Otro ejemplo con icono diferente */}
      <Alerta icono={iconoError} mensaje="Error al procesar" />
    </div>
  );
}
export default App;
