import { render } from '@testing-library/react';
import React, { Component } from 'react';
import axios from 'axios';
import DataMapper from './DataMapper/DataMapper';
import SearchBar from './SearchBar/SearchBar';

class App extends Component {
    constructor() {
        super();
        this.state = {
            music: [],
            searchedMusic: []
        }
    }

    componentDidMount() {
        this.getAll();
    }

    handleSearchCallBack = (search, songs) => {
        this.setState({
            music: songs.filter((song) => Object.values(song).includes(search))
        })
    };

    getAll = async () => {
        await axios
            .get("http://www.devcodecampmusiclibrary.com/api/music")
            .then((res) => {
                console.log(res.data);
                const music = res.data;
                this.setState({music: music});
            })
    }

    render() {
        return (
            <div>
                <SearchBar songs={this.state.music} filterSongs={this.handleSearchCallBack}/>
                <DataMapper songs={this.state.music}/>
            </div>
        )
    }
}

export default App;