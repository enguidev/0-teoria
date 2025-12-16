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
import { Caja } from "./components/Caja";
function App() {
  return (
    // <MyRoutes/>

    <div>
      {/* Pasamos una clase CSS adicional */}
      <Caja className="destacada">Contenido destacado</Caja>
      {/* El div resultante tendrá: className="caja destacada" */}

      {/* Otra caja con clase diferente */}
      <Caja className="borde-rojo">Contenido con borde rojo</Caja>
      {/* El div resultante tendrá: className="caja borde-rojo" */}

      {/* Sin clase adicional */}
      <Caja className="">Caja normal</Caja>
      {/* El div resultante tendrá: className="caja " */}
    </div>
  );
}
export default App;
