// import { MyRoutes } from "./routers/router";
// import { ComponenteHijo } from "./components/ComponenteHijo";
// import { BotonAccion } from "./components/BotonAccion.jsx";
// import { ItemLista } from "./components/ItemLista";
// import { Layout } from "./components/Layout";
// import { Perfil } from "./components/Perfil";
import { Saludo } from "./components/Saludo";
function App() {
  return (
    // <MyRoutes/>

    <div>
      {/* Sin pasar props: usa todos los valores por defecto */}
      <Saludo />
      {/* Resultado: "Hola, Invitado!" */}

      {/* Pasando solo el nombre: usa el idioma por defecto */}
      <Saludo nombre="Ana" />
      {/* Resultado: "Hola, Ana!" */}

      {/* Pasando ambas props: no usa ningún valor por defecto */}
      <Saludo nombre="John" idioma="en" />
      {/* Resultado: "Hello, John!" */}

      {/* Solo cambiando el idioma */}
      <Saludo idioma="fr" />
      {/* Resultado: "Bonjour, Invitado!" */}
    </div>
  );
}
export default App;
