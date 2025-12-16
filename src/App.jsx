// import { MyRoutes } from "./routers/router";
import { ComponenteHijo } from "./components/ComponenteHijo";
function App() {
  const isApproved = false;
  return (
    // <MyRoutes/>

    <ComponenteHijo
      cargado={false}
      aprobado={isApproved}
      terminado // Esto sería true
    />
  );
}
export default App;
