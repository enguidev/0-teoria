export const Etiqueta = ({ estilo, texto }) => {
  // 'estilo' es un objeto JavaScript con propiedades CSS
  return <span style={estilo}>{texto}</span>;
};
