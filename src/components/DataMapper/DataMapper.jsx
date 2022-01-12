import React from 'react';


const DataMapper = (props) => {
    console.log(props.songs.map((el) => el.title));
    return(
        <div>
            <h1>
                {(props.songs.length > 0) ? <ul>{props.songs.map((el, i) => 
                <li key={i}>
                    "{el.title}" By: {el.artist} on {el.album}
                </li>)}</ul> : <div>Nothing</div>} 
            </h1>  
        </div>
    );
}


export default DataMapper;