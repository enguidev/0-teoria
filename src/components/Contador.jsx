import { useState } from "react";
import { Modal } from "./Modal";
export const Contador = () => {
  const [state, setState] = useState(false);
  return (
    <div className="bg-amber-600 p-4 rounded-2xl">
      <h1 className="contador">Soy el contador</h1>
      <button onClick={() => setState(!state)}>
        {state ? "Ocultar" : "Ver"}
      </button>
      {
        // Si el estado es true, mostramos el Modal
        state && <Modal />
      }
    </div>
  );
};
