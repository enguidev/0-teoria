// COMPONENTE HIJO: Recibe elementos JSX como props
export const Alerta = ({ icono, mensaje }) => {
  return (
    <div className="alerta">
      {/* 'icono' es un elemento React completo, se renderiza tal cual */}
      {icono}
      {/* 'mensaje' es solo texto */}
      <span>{mensaje}</span>
    </div>
  );
};
