export const ItemLista = ({ nombre, onEliminar, id }) => {
  return (
    <div>
      <span>{nombre}</span>
      {/* Usamos una arrow function para pasar el parámetro 'id' a la función */}
      {/* Si pusiéramos onClick={onEliminar(id)} se ejecutaría inmediatamente */}
      <button onClick={() => onEliminar(id)}>Eliminar</button>
    </div>
  );
};
