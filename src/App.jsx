// import { MyRoutes } from "./routers/router";
import { ComponenteHijo } from "./components/ComponenteHijo";
function App() {
  const numero = 25;
  return (
    // <MyRoutes/>

    <ComponenteHijo digito={numero} digito2= {47} digito3= {5 + 10} digito4= {numero + 5}/>
  );
}
export default App;
