import React from 'react';

const SongEditor = (props) => {
    return(
        <div id="song-editor">
            {(props.song !== undefined) ? 
            <React.Fragment>
                {document.getElementById("song-editor").hidden = false,
                document.getElementById("song-table").hidden = true,
                document.getElementById("result-counter").hidden = true}
                <div className='container col-lg-4 col-md-6'>
                    <h1 className='song-list'>
                        <form onSubmit={props.songSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input className="form-control editor-label" id="titleText" name="title" onChange={props.songChange} value={props.song.title}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Artist</label>
                            <input className="form-control editor-label" id="titleText" name="artist" onChange={props.songChange} value={props.song.artist}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Album</label>
                            <input className="form-control editor-label" id="titleText" name="album" onChange={props.songChange} value={props.song.album}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Genre</label>
                            <input className="form-control editor-label" id="titleText" name="genre" onChange={props.songChange} value={props.song.genre}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Released</label>
                            <input className="form-control editor-label" id="titleText" name="releaseDate" onChange={props.songChange} value={props.song.releaseDate}/>
                        </div>
                            <button type="submit" className="btn btn-success">Save Song</button>
                        </form>
                    </h1>
                </div>
            </React.Fragment>: null}
        </div>
    )
}

export default SongEditor;