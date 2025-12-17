import { useContext } from "react";
import { TemaContext } from "../contexts/TemaContext";

export const Componente3 = () => {
  const tema = useContext(TemaContext);

  return <p style={{ color: tema.color }}>Otro texto con tema</p>;
};
