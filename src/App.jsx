// import { MyRoutes } from "./routers/router";
import { ComponenteHijo } from "./components/ComponenteHijo";
function App() {
  const cadena = "Esto es un string";
  return (
    // <MyRoutes/>

    <ComponenteHijo texto={cadena} />
  );
}
export default App;
