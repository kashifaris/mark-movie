import React from 'react';
import {handleMovieSearch,addMovieToList} from '../actions'
import {data} from '../data';
class Navbar extends React.Component{

    constructor (props){
        super(props);
        this.state={
            showSearchResults:false,
            searchText:""
        };
    }

     handelAddToMovies=(movie)=>{
         this.props.dispatch(addMovieToList(movie));
         this.setState({
             showSearchResults:false
         });
     }

    handleSearch=()=>{
        const {searchText}=this.state;
        this.props.dispatch(handleMovieSearch(searchText));
    };
    
handeleChange=(e)=>{
   this.setState({
    searchText:e.target.value
   }); 

};
    render(){
        const{result,showSearchResults}=this.props.search;
        return (
            <div className='nav'>
                <div className='search-container'>
                    <input onChange={this.handeleChange}/>
                    <button id="search-btn" onClick={this.handleSearch} >search</button>
                {showSearchResults &&
                    <div className='search-results'>
                        <div className='search-result'>
                            <img src={result.Poster} alt="search-pic"/>

                            <div className='movie-info'>
                                <span>{result.Title}</span>
                                <button onClick={()=>this.handelAddToMovies(result)} >
                                    Add to Movies
                                </button>

                            </div>

                        </div>

                    </div>
                }
                </div>
            </div>
        );
    }
}

export default Navbar