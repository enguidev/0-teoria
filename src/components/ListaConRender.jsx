// COMPONENTE HIJO: Recibe una función que retorna JSX
export const ListaConRender = ({ items, renderItem }) => {
  return (
    <ul>
      {/* Iteramos sobre los items */}
      {items.map((item, index) => (
        <li key={index}>
          {/* Llamamos a la función renderItem pasándole cada item */}
          {/* La función padre decide CÓMO renderizar cada item */}
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};
