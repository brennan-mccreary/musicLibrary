import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return(
            <nav className="navbar">
                <div className="container-fluid justify-content-center search-bar">
                    <form className="d-flex">
                        <input className="form-control me-2" onChange={this.props.handleChange} value={this.props.search} name="search-bar" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                </div>
            </nav>
        )
    };
}

export default SearchBar;