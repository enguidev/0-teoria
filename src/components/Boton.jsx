// COMPONENTE HIJO: Desestructura props específicas y captura el resto
export const Boton = ({ texto, tipo, ...otrasProps }) => {
  // 'texto' y 'tipo' se extraen específicamente
  // 'otrasProps' es un objeto con todas las demás props que se pasen
  return (
    // Aplicamos la clase según el tipo
    // ...otrasProps expande todas las props adicionales al button
    <button className={tipo} {...otrasProps}>
      {texto}
    </button>
  );
};
