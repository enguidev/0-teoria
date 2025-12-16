// COMPONENTE HIJO: Recibe múltiples props individuales
export const Perfil = ({ nombre, edad, ciudad, profesion }) => {
  return (
    <div>
      {/* Usamos cada prop individualmente */}
      <h2>{nombre}</h2>
      <p>{edad} años</p>
      <p>Ciudad: {ciudad}</p>
      <p>Profesión: {profesion}</p>
    </div>
  );
};
