// import { MyRoutes } from "./routers/router";
import { ComponenteHijo } from "./components/ComponenteHijo";
function App() {
  const cadena = "Esto es un texto pasado por JS";
  return (
    // <MyRoutes/>

    <ComponenteHijo texto={cadena} texto2= "Este es un texto hardcodeado" />
  );
}
export default App;
