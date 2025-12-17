import { Componente2 } from "./Componente2";
import { Componente3 } from "./Componente3";
// COMPONENTE INTERMEDIO: No necesita recibir ni pasar props
export const Componente1 = () => {
  // Este componente NO usa el contexto
  // Pero sus hijos SÍ pueden acceder a él
  return (
    <div>
      <h1>Componente 1</h1>
      {/* No pasamos props, pero Componente2 podrá usar el contexto */}
      <Componente2 />
      {/* ✅ Agregar Componente3 aquí */}
      <Componente3 />
    </div>
  );
};
