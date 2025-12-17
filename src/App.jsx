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
import { Contenedor } from "./components/Contenedor";
// Definimos componentes que usaremos como props
const Header = () => <header>🏠 Cabecera de la página</header>;
const Footer = () => <footer>© 2025 - Pie de página</footer>;
const HeaderAlternativo = () => (
  <header style={{ backgroundColor: "blue" }}>Otra cabecera</header>
);
function App() {
  return (
    <div>
      {/* Pasamos componentes como props (sin instanciar, sin <>) */}
      <Contenedor
        ComponenteHeader={Header}
        ComponenteFooter={Footer}
        contenido={<p>Este es el contenido principal</p>}
      />

      {/* Mismo componente con diferentes Headers/Footers */}
      <Contenedor
        ComponenteHeader={HeaderAlternativo}
        ComponenteFooter={Footer}
        contenido={<article>Artículo completo</article>}
      />

      {/* También podemos pasar componentes inline */}
      <Contenedor
        ComponenteHeader={() => <header>Header inline</header>}
        ComponenteFooter={() => <footer>Footer inline</footer>}
        contenido={<div>Contenido diferente</div>}
      />
    </div>
  );
}
export default App;
