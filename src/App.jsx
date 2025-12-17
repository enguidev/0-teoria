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
import { Etiqueta } from "./components/Etiqueta";
function App() {
  // Definimos objetos con estilos CSS (camelCase en vez de kebab-case)
  const estiloDestacado = {
    color: "red",
    fontSize: "20px",
    fontWeight: "bold",
    backgroundColor: "yellow",
  };

  const estiloNormal = {
    color: "blue",
    fontSize: "14px",
  };

  return (
    <div>
      {/* Pasamos el objeto de estilos como prop */}
      <Etiqueta estilo={estiloDestacado} texto="Texto importante" />

      {/* Pasamos estilos inline directamente */}
      <Etiqueta
        estilo={{ color: "green", fontSize: "16px" }}
        texto="Otro texto"
      />
      {/* Nota: dobles llaves {{ }} porque es un objeto dentro de JSX */}

      {/* Con el estilo normal */}
      <Etiqueta estilo={estiloNormal} texto="Texto normal" />
    </div>
  );
}
export default App;
