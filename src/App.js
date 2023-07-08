import React, { useState, useEffect } from 'react';
import './App.css';
import ApiMovie from './ApiMovie.js';
import Header from './components/Header';
import MovieSection from './components/MovieSection';
import FeaturedMovie from './components/FeaturedMovie';

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [featuredData, setfeaturedData] = useState(null); 

  useEffect(()=>{
    const loadAllMovies = async() => {
      let list = await ApiMovie.getHomeMovies();

      // Get top-rated movies
      let originals = list.filter((oneMovie) => oneMovie.slug === "top-rated");

      // Choose a random movie
      let chooseRandomMovie = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[chooseRandomMovie];
      let chosenInfo = await ApiMovie.getMovieInfo(chosen.id, 'movie')
      
      setMoviesList(list);
      setfeaturedData(chosenInfo);

      console.log(chosenInfo);
    }

    loadAllMovies()
  }, [])

  return (
    <div className="page">
      <Header />
      {featuredData && <FeaturedMovie films = {featuredData} />}
      <section className='list'>
        {moviesList.map((item, key) => (
          <MovieSection key = {key} title= {item.title} items = {item.items}/>
        ))}
      </section>
    </div>
  );
}

export default App;
