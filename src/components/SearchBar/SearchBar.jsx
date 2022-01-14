import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        }
    }
    
    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            search: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.filterSongs(this.state.search, this.props.songs)
    };
    
    render() {
        return(
            <nav className="navbar">
                <div className="container-fluid justify-content-center search-bar">
                    <form className="d-flex" onSubmit={this.handleSubmit}>
                        <input className="form-control me-2" onChange={this.handleChange} type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-dark" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    };
}

export default SearchBar;