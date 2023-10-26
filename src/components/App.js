import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies,showFavourites} from '../actions';


class App extends React.Component {
  componentDidMount(){
    const {store}=this.props;

   //this will call just after the dispatch 
    store.subscribe(()=>{
      this.forceUpdate();//used for updating the app
    });

    //used for performing action it takes action object & action obj is passed to reducer
    store.dispatch(addMovies(data));
    }

    isMovieFavourite =(movie)=>{
      const {movies}=this.props.store.getState();
      const index=movies.favourites.indexOf(movie);
      if(index!==-1) return true;
      else return false;
  }

  onChangeTab=(val)=>{
    this.props.store.dispatch(showFavourites(val))
  }
  

  render(){
    const{movies,search}=this.props.store.getState();// {movies:{},search{}}
  const {list,favourites,showFavourites}=movies;
  console.log("render",this.props.store.getState());
  const displayMovies=showFavourites? favourites:list;
 
  return (
    <div className="App">
      <Navbar dispatch={this.props.store.dispatch} search={search} />
      <div className="main">
        <div className="tabs">
        <div className={`tab ${showFavourites ?'' : 'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>movies</div>
        <div className={`tab ${showFavourites ? 'active-tabs' :''}`} onClick={()=>this.onChangeTab(true)}>Favourites</div>
        </div>
        <div className="list">
          {displayMovies.map((movie, index)=>(
            <MovieCard 
            movie={movie} 
            key={index} 
            dispatch={this.props.store.dispatch}
            isFavourite={this.isMovieFavourite(movie)}
            />
          ))}
        </div>
        {displayMovies.length===0 ? <div> No favourite movies </div> : null }
      </div>
    </div>
  );
   }
}

export default App;
