import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        }
    }

    // filterSongs = (search, songs) => (
    //     songs = songs.filter((song) => Object.values(song).includes(search)),
    //     this.setState((state) => {
    //         return {songList: state.songList.concat(songs)}
    //     })
    // );

    
    handleChange = (event) => (
        this.setState({
            search: event.target.value
        })
    );

    handleSubmit = (event) => (
        event.preventDefault(),
        this.props.filterSongs(this.state.search, this.props.songs)
    );
    
    render() {
        return(
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid search-bar">
                    <form className="d-flex" onSubmit={this.handleSubmit}>
                        <input className="form-control me-2" onChange={this.handleChange} type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    };
}

export default SearchBar;