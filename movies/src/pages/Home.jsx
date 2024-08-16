import ViHero from "../assets/hero-video.webm";

export const Home = () => {
  return (
    <main className="">
      <h1 className="m-5 text-4xl font-semibold text-center flex justify-center items-center">
        Tu lugar de peliculas en linea
      </h1>
      <figure>
        <video className="object-cover " loop muted playsInline  >
          <source src={ViHero} type="video/mp4" />
          Tu navegador no soporta el elemento <code>video</code>.
        </video>
        {/*<figcaption>Descripcion aqui</figcaption>*/}
      </figure>
      <section className="flex flex-col justify-center items-center gap-3 m-2">
        <h2 className="text-center text-yellow-600 text-4xl font-semibold">En este sitio encontraras, peliculas, series y avances</h2>
        <p className="text-slate-400 font-semibold text-2xl text-center">si no encuentras la que buscas, deja tu comentario para solucionarlo</p>
      </section>
    </main>
  );
};

