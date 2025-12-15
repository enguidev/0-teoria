import { useState } from "react";
import { useEffect } from "react";
import { BtnVolver } from "../ui/buttons/btnVolver";

export const UseEffectPage = () => {
  const [segundos, setSegundos] = useState(0);
  // Iniciamos el hook que recibe una función que se ejecutará
  useEffect(() => {
    /* Crea un temporizador que se ejecuta repetidamente cada segundo
    y guarda la referencia del temporizador en intervalo */
    const intervalo = setInterval(() => {
      /* Actualiza el estado de segundos
         s: valor actual de segundos porque setSegundos modifica a segundos.
         Le suma 1 y devuelve el nuevo valor
      */
      setSegundos((s) => s + 1);
      // Se ejecuta cada 1.000 milisegundos (1 segundo)
    }, 1000);
    /* Detiene el temporizador cuando se desmonta el componente
       ya que si no hacemos esto, el temporizador seguirá corriendo aunque cambiemos de página */
    return () => clearInterval(intervalo);
    /* Cierra el useEffect. 
       []: ejecuta este efecto solo una vez al montar el componente */
  }, []);
  return (
    <div className="h-screen bg-amber-300 text-black">
      <BtnVolver />
      <h2>UseEffectPage</h2>
      <span>{segundos}</span>
    </div>
  );
};
