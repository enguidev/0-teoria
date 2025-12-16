// import { MyRoutes } from "./routers/router";
// import { ComponenteHijo } from "./components/ComponenteHijo";
// import { BotonAccion } from "./components/BotonAccion.jsx";
// import { ItemLista } from "./components/ItemLista";
// import { Layout } from "./components/Layout";
import { Perfil } from "./components/Perfil";
function App() {
  // Tenemos un objeto con todas las propiedades
  const datosUsuario = {
    nombre: "Carlos Ruiz",
    edad: 35,
    ciudad: "Madrid",
    profesion: "Desarrollador",
  };

  return (
    // <MyRoutes/>

    <div>
      {/* Forma tradicional: pasar cada prop individualmente */}
      <Perfil
        nombre={datosUsuario.nombre}
        edad={datosUsuario.edad}
        ciudad={datosUsuario.ciudad}
        profesion={datosUsuario.profesion}
      />

      {/* Forma con spread: el operador ... expande todas las propiedades */}
      {/* Es equivalente a escribir cada prop manualmente */}
      <Perfil {...datosUsuario} />

      {/* Podemos combinar spread con props adicionales */}
      <Perfil {...datosUsuario} edad={40} />
      {/* La prop 'edad' sobreescribe la del objeto */}
    </div>
  );
}
export default App;
