import React from 'react';
import './SongCreator.css';

const SongCreator = (props) => {
    return(
        <div id="song-creator">
            <button id="create-song-home" type="submit" className="create-home-btn btn btn-success container col-md-4" onClick={props.createHome}>Create Song</button>
            {(props.clicked === true) ? 
            <React.Fragment>
                {document.getElementById("create-song-home").hidden = true,
                document.getElementById("song-table").hidden = true,
                document.getElementById("result-counter").hidden = true}
                <div className='container col-lg-4 col-md-6' id="create-song-form">
                    <h1 className='song-list'>
                        <form onSubmit={props.createSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input className="form-control editor-label" id="titleText" name="title" onChange={props.createChange} value={props.newSong.title}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Artist</label>
                            <input className="form-control editor-label" id="titleText" name="artist" onChange={props.createChange} value={props.newSong.artist}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Album</label>
                            <input className="form-control editor-label" id="titleText" name="album" onChange={props.createChange} value={props.newSong.album}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Genre</label>
                            <input className="form-control editor-label" id="titleText" name="genre" onChange={props.createChange} value={props.newSong.genre}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Released</label>
                            <input className="form-control editor-label" id="titleText" name="releaseDate" onChange={props.createChange} value={props.newSong.releaseDate}/>
                        </div>
                            <button type="submit" className="btn btn-success">Create Song</button>
                        </form>
                    </h1>
                </div>
            </React.Fragment>: null}
        </div>
    )
}

export default SongCreator;