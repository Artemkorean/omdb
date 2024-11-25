import logo from './logo.svg';
import './App.css';
import { APIKEY } from './env';
import { useState, useEffect } from 'react'
import movies from './components/Movies/Movies'
import Movies from './components/Movies/Movies';

function App() {
  const URL = 'https://api.kinopoisk.dev/v1.4/movie?query=Star'
  const[movies,setMovies]=useState([])
  useEffect(() => {
    async function fetchMovies(){

      const res = await fetch(URL, {
        headers: {
          'X-API-KEY': APIKEY
        }
      })
      const data = await res.json()
      setMovies(data.docs)
    }
    fetchMovies()
  }, [URL])

  return (
    <div className="App">
      <header className="App-header">
        {
          <Movies movies = {movies} />
        }
      </header>
    </div>
  );
}

export default App;
