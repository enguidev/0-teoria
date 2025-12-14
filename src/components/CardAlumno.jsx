export const CardAlumno = ({ item }) => (
  <div className="text-white p-4 border rounded-2xl shadow-2xl">
    <h3 className="text-xl font-bold">{item.nombre}</h3>
    <p className="text-gray-600">
      {item.edad}
      {" años"}
    </p>
    {
      // Si es repetidor, mostramos que es repetidor
      item.esRepetidor && (
        <span className="text-yellow-600 font-semibold">Repetidor</span>
      )
    }
  </div>
);
