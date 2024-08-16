import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <header className="flex flex-col justify-center items-center">
      <p className="text-6xl text-blue-400 bg-white font-bold text-center h-20 flex justify-center items-center max-sm:text-5xl w-full">
        MOVIES DEV
      </p>
      <nav className="flex justify-center items-center h-14 w-full">
        <ol className="flex justify-center items-center max-sm:gap-10">
          <li className="text-xl font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="text-xl font-semibold">
            <Link to="/movies">Peliculas</Link>
          </li>
          <li className="text-xl font-semibold">
            <Link to="/series">Series</Link>
          </li>
        </ol>
      </nav>
      <div className="border-t pt-2 w-full">
        <form action="" className="flex justify-center items-center gap-3">
          <input
            type="search"
            placeholder="Escriba el nombre de la pelicula, serie"
            className="max-sm:w-52 h-11 rounded-xl pl-2"
          />
          <button className="h-11 w-24 rounded-xl bg-blue-500 text-white">
            Buscar
          </button>
        </form>
      </div>
      <div className="mt-2 border-t w-full"></div>
    </header>
  );
};
