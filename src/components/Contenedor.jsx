// Contenedor.jsx
export const Contenedor = ({
  ComponenteHeader,
  ComponenteFooter,
  contenido,
}) => {
  return (
    <div>
      {/* ✅ FORMA CORRECTA: Renderizar como componente React */}
      {ComponenteHeader && <ComponenteHeader />}

      <main>{contenido}</main>

      {ComponenteFooter && <ComponenteFooter />}
    </div>
  );
};
