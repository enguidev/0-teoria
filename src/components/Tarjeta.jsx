// COMPONENTE HIJO: Recibe 'children' (contenido entre etiquetas)
export const Tarjeta = ({ children }) => {
  // 'children' es una prop especial que contiene todo lo que va entre las etiquetas
  return (
    <div className="tarjeta">
      {/* Renderizamos el contenido children */}
      {children}
    </div>
  );
};
