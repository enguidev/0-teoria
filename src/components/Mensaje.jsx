// COMPONENTE HIJO: Renderiza condicionalmente según las props
export const Mensaje = ({ tipo, texto, mostrarIcono }) => {
  return (
    // Clase dinámica según el tipo
    <div className={`mensaje-${tipo}`}>
      {/* Renderizado condicional: solo muestra icono si mostrarIcono es true */}
      {/* Operador && : si la izquierda es true, evalúa la derecha */}
      {mostrarIcono && <span>📌</span>}

      <p>{texto}</p>
    </div>
  );
};
