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
import { Componente1 } from "./components/Componente1";
// ✅ Importamos el Context desde el archivo de contexts
import { TemaContext } from "./contexts/TemaContext";

function App() {
  const tema = {
    color: "azul",
    fuente: "Arial",
    tamano: "16px",
  };

  return (
    <TemaContext.Provider value={tema}>
      <Componente1 />
    </TemaContext.Provider>
  );
}

export default App;
