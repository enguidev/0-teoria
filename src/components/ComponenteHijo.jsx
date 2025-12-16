export const ComponenteHijo = ({ usuario, usuario2 }) => {
  return (
    <div>
      {/* Accedemos a las propiedades del objeto con notación de punto */}
      <h2>{usuario.nombre}</h2>
      <p>Edad: {usuario.edad}</p>
      <p>Email: {usuario.email}</p>

      {/* Con usuario2 */}
      <p>
        {usuario2.nombre} tiene {usuario2.edad} años y su email es{" "}
        {usuario2.email}
      </p>
    </div>
  );
};
