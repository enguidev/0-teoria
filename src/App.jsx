// import { MyRoutes } from "./routers/router";
// import { ComponenteHijo } from "./components/ComponenteHijo";
// import { BotonAccion } from "./components/BotonAccion.jsx";
import { ItemLista } from "./components/ItemLista";
function App() {
  // Función que recibe un parámetro 'id'
  const eliminarItem = (id) => {
    console.log(`Eliminando item con ID: ${id}`);
    // Aquí iría la lógica para eliminar el item
  };

  return (
    // <MyRoutes/>

    <div>
      {/* Pasamos la función y los datos necesarios */}
      <ItemLista nombre="Producto 1" onEliminar={eliminarItem} id={5} />

      <ItemLista nombre="Producto 2" onEliminar={eliminarItem} id={10} />

      {/* Cada botón eliminará su propio ID */}
      <ItemLista nombre="Producto 3" onEliminar={eliminarItem} id={15} />
    </div>
  );
}
export default App;
