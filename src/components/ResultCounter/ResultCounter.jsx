import React from 'react';
import './ResultCounter.css';

const ResultCounter = (props) => {
    let results = props.songs.filter((el) => 
        el.title.includes(props.search) ||
        el.artist.includes(props.search) ||
        el.genre.includes(props.search) ||
        el.album.includes(props.search) ||
        el.releaseDate.includes(props.search)).length
    return(
        <div id="result-counter" className='result-count'>{results} matching results found...</div>
    )
}

export default ResultCounter;