export const ComponenteHijo = ({ cargado, aprobado, terminado }) => {
  const terminar = () => {
    if (terminado) return <p>He terminado</p>;
    else return <p>No he terminado</p>;
  };
  return (
    <div className="h-screen bg-amber-300 text-black">
      {/* Si cargado es false, muestra el móvil no está cargado */}
      <h1>{!cargado && <p>El móvil no está cargado</p>}</h1>
      {/* Si aprobado es true, muestra "Aprobado" y si no, muestra Suspenso */}
      <h2>{aprobado ? "Aprobado" : "Suspenso"}</h2>
      {/* Mostramos el párrafo que nos devuelve la función terminar */}
      <h3>{terminar()}</h3>
    </div>
  );
};
