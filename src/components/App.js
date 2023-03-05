import React from 'react';
import {data} from '../../../movie-app/src/data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
        <div className="tab">movies</div>
        <div className="tab">Favourites</div>
        </div>
        <div className="list">
          {data.map(movie=>(
            <MovieCard movie={movie}/>
          ))}
        </div>
         </div>
    </div>
  );
}

export default App;