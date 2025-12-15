import { useState } from "react";
import { useEffect } from "react";
import { BtnVolver } from "../ui/buttons/btnVolver";

export const UseEffectPage = () => {
  const [segundos, setSegundos] = useState(0);
  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((s) => s + 1);
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);
  return (
    <div className="h-screen bg-amber-300 text-black">
      <BtnVolver />
      <h2>UseEffectPage</h2>
      <span>{segundos}</span>
    </div>
  );
};
