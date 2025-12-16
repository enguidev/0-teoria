// import { MyRoutes } from "./routers/router";
import { ComponenteHijo } from "./components/ComponenteHijo";
function App() {
  // Creamos un objeto con los datos del usuario
  const datosUsuario = {
    nombre: "María García",
    edad: 28,
    email: "maria@example.com",
  };
  return (
    // <MyRoutes/>

    <div>
      <ComponenteHijo
        // Pasamos el objeto completo como prop
        usuario={datosUsuario}
        // También podemos crear el objeto inline
        usuario2={{
          nombre: "Juan Pérez",
          edad: 35,
          email: "juan@example.com",
        }}
      />
    </div>
  );
}
export default App;
