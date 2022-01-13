import React from 'react';
import './DataMapper.css';


const DataMapper = (props) => {
    return(
        <div className='container'>
            <h1 className='song-list col-xs-12'>
                <table className='song-table'>
                    <thead>
                        <tr>
                            <th className='table-header id'>ID</th>
                            <th className='table-header title'>Title</th>
                            <th className='table-header artist'>Artist</th>
                            <th className='table-header album'>Album</th>
                            <th className='table-header'>Genre</th>
                            <th className='table-header'>Released</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(props.songs.length > 0) ? <React.Fragment>{props.songs.map((el, i) => 
                        <tr key={i}>
                            <td>{el.id}</td>
                            <td>"{el.title}"</td> 
                            <td>{el.artist}</td>
                            <td>{el.album}</td>  
                            <td>{el.genre}</td>
                            <td>{el.releaseDate}</td>
                        </tr>)}</React.Fragment> : null} 
                    </tbody>
                </table>
            </h1>  
        </div>
    );
}


export default DataMapper;