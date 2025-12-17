import { forwardRef } from "react";

// COMPONENTE HIJO: Necesita forwardRef para recibir una ref
// forwardRef recibe dos parámetros: props y ref
export const InputPersonalizado = forwardRef((props, ref) => {
  // 'ref' se pasa al elemento DOM que queremos controlar
  // {...props} pasa todas las props adicionales al input
  return (
    <input
      ref={ref} // Conectamos la ref al input real
      {...props} // Pasamos todas las props (placeholder, type, etc.)
      style={{
        padding: "10px",
        border: "2px solid blue",
      }}
    />
  );
});
