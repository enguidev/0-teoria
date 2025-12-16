// import { MyRoutes } from "./routers/router";
// import { ComponenteHijo } from "./components/ComponenteHijo";
// import { BotonAccion } from "./components/BotonAccion.jsx";
// import { ItemLista } from "./components/ItemLista";
import { Tarjeta } from "./components/Tarjeta";
function App() {
  return (
    // <MyRoutes/>

    <div>
      {/* Todo lo que va entre <Tarjeta> y </Tarjeta> es 'children' */}
      <Tarjeta>
        <h2>Título de la tarjeta</h2>
        <p>Este es el contenido de la tarjeta</p>
        <button>Acción</button>
      </Tarjeta>

      {/* Otra tarjeta con diferente contenido */}
      <Tarjeta>
        <img src="../public/vite.svg" alt="Imagen" />
        <p>Una tarjeta con imagen</p>
      </Tarjeta>
    </div>
  );
}
export default App;
