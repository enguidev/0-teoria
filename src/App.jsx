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
import { ListaConRender } from "./components/ListaConRender";
function App() {
  // Array de números
  const numeros = [1, 2, 3, 4, 5];

  // Array de objetos
  const usuarios = [
    { id: 1, nombre: "Ana", edad: 25 },
    { id: 2, nombre: "Luis", edad: 30 },
  ];

  return (
    <div>
      {/* Pasamos una función que define cómo renderizar cada número */}
      <ListaConRender
        items={numeros}
        renderItem={(num) => <strong>Número: {num}</strong>}
      />
      {/* Cada item se renderiza como <li><strong>Número: X</strong></li> */}

      {/* Otra lista con diferente render */}
      <ListaConRender
        items={numeros}
        renderItem={(num) => (
          <span style={{ color: num > 3 ? "red" : "blue" }}>{num}</span>
        )}
      />
      {/* Números > 3 en rojo, resto en azul */}

      {/* Lista de objetos con render personalizado */}
      <ListaConRender
        items={usuarios}
        renderItem={(usuario) => (
          <div>
            <h3>{usuario.nombre}</h3>
            <p>Edad: {usuario.edad}</p>
          </div>
        )}
      />
    </div>
  );
}
export default App;
