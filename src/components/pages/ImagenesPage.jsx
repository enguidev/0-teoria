import imagenLocal from "../../assets/gatito.jpg";
import { BtnVolver } from "../../components/ui/buttons/BtnVolver";
export const ImagenesPage = () => {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-10">
      <BtnVolver />
      <h1 className="text-3xl font-bold text-center">Imágenes con react</h1>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Imagen local importada</h2>
        <img src={imagenLocal} alt="imagen local" />
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Imagen desde una URL Externa</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-7TFkBpXUWex830sbQ0vULZUpxyXQRqDpA&s"
          alt="imagen local"
        />
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Imagen como fondo</h2>
        <div
          className="flex h-64 bg-cover bg-center rounded-2xl items-center justify-center"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2023/05/23/18/12/hummingbird-8013214_1280.jpg')",
          }}
        >
          <span className="bg-black/60 px-2 py-2 rounded-2xl text-white">
            Fondo con texto encima
          </span>
        </div>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Imagen con Lazy</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-7TFkBpXUWex830sbQ0vULZUpxyXQRqDpA&s"
          alt="imagen local"
          loading="lazy"
        />
      </section>
    </main>
  );
};
