import React from 'react';
import { addFavourite,removeFavourite } from '../actions';

class MoovieCard extends React.Component{


    handelFavouriteClick=()=>{
        const {movie}=this.props;
        this.props.dispatch(addFavourite(movie));
    }

    handelUnfavouriteClick=()=>{
        const {movie}=this.props;
        this.props.dispatch(removeFavourite(movie));
    }
    render(){
        const {movie,isFavourite}=this.props;
        return (
            <div className='movie-card'>
                <div className='left'>
                    <img alt='movie-postre' src={movie.Poster} />
                </div>
                <div className='right'>
                    <div className='title'>{movie.Title}</div>
                    <div className='plot'>{movie.Plot}</div>
                    <div className='footer'>
                        <div className='rating'>{movie.imdbRating}</div>
                        {
                            isFavourite ?
                            <button className='unfavourite-btn' onClick={this.handelUnfavouriteClick}>Unfavourite</button>
                            :
                            <button className='favourite-btn' onClick={this.handelFavouriteClick}>Favourite</button>

                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default MoovieCard;