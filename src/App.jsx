// import { MyRoutes } from "./routers/router";
// import { ComponenteHijo } from "./components/ComponenteHijo";
// import { BotonAccion } from "./components/BotonAccion.jsx";
// import { ItemLista } from "./components/ItemLista";
// import { Layout } from "./components/Layout";
// import { Perfil } from "./components/Perfil";
// import { Saludo } from "./components/Saludo";
import { Boton } from "./components/Boton";
function App() {
  const manejarClick = () => console.log("Click en botón");
  return (
    // <MyRoutes/>

    <div>
      {/* Pasamos props específicas y props HTML nativas */}
      <Boton
        texto="Enviar" // Prop específica
        tipo="primary" // Prop específica
        onClick={manejarClick} // Se pasa a otrasProps
        disabled={false} // Se pasa a otrasProps
        id="btn-enviar" // Se pasa a otrasProps
        data-test="boton-test" // Se pasa a otrasProps
      />
      {/* El botón final tendrá TODAS estas props aplicadas */}

      {/* Otro ejemplo con diferentes props */}
      <Boton
        texto="Cancelar"
        tipo="secondary"
        style={{ marginTop: "10px" }} // Se pasa a otrasProps
        title="Cancelar acción" // Se pasa a otrasProps
      />
    </div>
  );
}
export default App;
