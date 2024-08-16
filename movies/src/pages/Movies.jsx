import { useState, useEffect } from 'react';

export const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = 'e20a599c5a5526281f737a9239854d36'; // Tu clave API
  const BASE_URL = 'https://api.themoviedb.org/3'; // Base URL para TMDB
  const POPULAR_MOVIES_URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const GENRES_URL = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      };

      try {
        // Fetch movies
        const moviesResponse = await fetch(POPULAR_MOVIES_URL, options);
        if (!moviesResponse.ok) {
          throw new Error('Network response was not ok for movies');
        }
        const moviesResult = await moviesResponse.json();

        // Fetch genres
        const genresResponse = await fetch(GENRES_URL, options);
        if (!genresResponse.ok) {
          throw new Error('Network response was not ok for genres');
        }
        const genresResult = await genresResponse.json();

        setMovies(moviesResult.results);
        setGenres(genresResult.genres); // `genres` contiene la lista de géneros
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Create a mapping of genre ID to genre name for easy lookup
  const genreMap = genres.reduce((map, genre) => {
    map[genre.id] = genre.name;
    return map;
  }, {});

  return (
    <main className='flex flex-col justify-center items-start m-4'>
      <h2 className='text-3xl font-semibold text-orange-400'>Popular Películas:</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id} className='mt-16'>
            <h3 className='text-xl font-semibold text-black bg-white mb-3'>{movie.title}</h3>
            <p className='text-slate-500'>{movie.overview}</p>
            {movie.poster_path && (
              <img 
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                alt={movie.title} 
                className='mt-3 rounded-xl shadow-lg shadow-white'
              />
            )}
            <div className='mt-2'>
              <h4 className='text-lg font-semibold  text-green-500'>Calificacion:</h4>
              <ul className='list-disc pl-5'>
                {movie.genre_ids.map(genreId => (
                  <li key={genreId} className=''>
                    {genreMap[genreId]}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};
