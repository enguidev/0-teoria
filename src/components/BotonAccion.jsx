// COMPONENTE HIJO: Recibe una función 'onClic' y un texto
export const BotonAccion = ({ onClic, etiqueta }) => {
  // Cuando se hace clic, ejecuta la función recibida por props
  return <button onClick={onClic}>{etiqueta}</button>;
};
