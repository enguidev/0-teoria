// import { MyRoutes } from "./routers/router";
// import { ComponenteHijo } from "./components/ComponenteHijo";
import { BotonAccion } from "./components/BotonAccion.jsx";
function App() {
  // Definimos la función que queremos ejecutar cuando se haga clic
  const manejarClic = () => {
    alert("¡Botón clicado!");
  };

  // Otra función diferente
  const saludar = () => {
    console.log("¡Hola desde el botón!");
  };
  return (
    // <MyRoutes/>

    <div>
      {/* Pasamos la función SIN ejecutarla (sin paréntesis) */}
      <BotonAccion onClic={manejarClic} etiqueta="Presionar" />

      {/* Otro botón con diferente función */}
      <BotonAccion onClic={saludar} etiqueta="Saludar" />

      {/* También podemos pasar una función anónima inline */}
      <BotonAccion
        onClic={() => alert("Función inline")}
        etiqueta="Click aquí"
      />
    </div>
  );
}
export default App;
