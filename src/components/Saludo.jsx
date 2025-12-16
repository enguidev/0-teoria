// COMPONENTE HIJO: Define valores por defecto en los parámetros
export const Saludo = ({ nombre = "Invitado", idioma = "es" }) => {
  // Si no se pasa 'nombre', usará "Invitado"
  // Si no se pasa 'idioma', usará "es"

  // Objeto con traducciones
  const saludos = {
    es: "Hola",
    en: "Hello",
    fr: "Bonjour",
  };
  return (
    <h1>
      {saludos[idioma]}, {nombre}!
    </h1>
  );
};
