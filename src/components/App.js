import React from 'react';
import {data} from '../../../movie-app/src/data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies } from '../actions';

class App extends React.Component {
  componentDidMount(){
    console.log("component mounted");
    const {store}=this.props;

    store.subscribe(()=>{
      console.log(" subscribe called"); 
      this.forceUpdate();
    });

    console.log("dispatch finished");

    store.dispatch(addMovies(data));
    
  }
  render(){
  const movies=this.props.store.getState();
  console.log("render");
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
        <div className="tab">movies</div>
        <div className="tab">Favourites</div>
        </div>
        <div className="list">
          {movies.map((movie, index)=>(
            <MovieCard movie={movie} key={index}/>
          ))}
        </div>
         </div>
    </div>
  );
   }
}

export default App;
