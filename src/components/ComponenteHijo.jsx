export const ComponenteHijo = ({ digito, digito2, digito3, digito4 }) => {
  return (
    <div className="h-screen bg-amber-300 text-black">
      <h1>{digito}</h1>
      <h2>{digito2}</h2>
      <h2>{digito3}</h2>
      <h2>{digito4}</h2>
    </div>
  );
};
