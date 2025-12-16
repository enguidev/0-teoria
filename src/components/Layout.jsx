// COMPONENTE HIJO: Recibe múltiples "slots" como props
export const Layout = ({ header, sidebar, contenido }) => {
  return (
    <div className="layout">
      {/* Cada prop contiene un elemento JSX diferente */}
      <header>{header}</header>
      <aside>{sidebar}</aside>
      <main>{contenido}</main>
    </div>
  );
};
