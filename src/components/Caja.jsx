// COMPONENTE HIJO: Recibe clases CSS adicionales
export const Caja = ({ className, children }) => {
  return <div className={`caja ${className}`}>{children}</div>;
};
