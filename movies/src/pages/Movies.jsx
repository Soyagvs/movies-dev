import { useState, useEffect } from 'react';

export const Movies = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = 'e20a599c5a5526281f737a9239854d36'; // Tu clave API
  const BASE_URL = 'https://api.themoviedb.org/3'; // Base URL para TMDB
  const POPULAR_MOVIES_URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(POPULAR_MOVIES_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.results); // `results` contiene la lista de películas populares
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  },[]); // El array vacío asegura que se ejecute solo una vez al montar el componente

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h2>Popular Peliculas:</h2>
      <ul>
        {data.map(movie => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <img 
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
              alt={movie.title} 
            />
          </li>
        ))}
      </ul>
    </>
  );
};
