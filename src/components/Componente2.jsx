import { useContext } from "react";
// ✅ Importamos desde contexts
import { TemaContext } from "../contexts/TemaContext";

export const Componente2 = () => {
  const tema = useContext(TemaContext);

  return (
    <div
      style={{
        color: tema.color,
        fontFamily: tema.fuente,
        fontSize: tema.tamano,
      }}
    >
      Texto con el tema aplicado
    </div>
  );
};
