import { render } from '@testing-library/react';
import React, { Component } from 'react';
import axios from 'axios';
import DataMapper from './DataMapper/DataMapper';
import SearchBar from './SearchBar/SearchBar';
import "./App.css"

class App extends Component {
    constructor() {
        super();
        this.state = {
            music: [],
            searchList: []
        }
    }

    componentDidMount() {
        this.getAll();        
    }

    // formatData = (data) => {
    //     data.map((data1) => )
    // }

    // let data = this.formatData(songs);
        // console.log(data);


    handleSearchCallBack = (search, songs) => {
        
        if(search === "") {
            this.setState({
                searchList: this.state.music
            })
        }
        else {
            this.setState({
                searchList: songs.filter((song) => Object.values(song).includes(search))
            })
        }
    };

    

    getAll = async () => {
        await axios
            .get("http://www.devcodecampmusiclibrary.com/api/music")
            .then((res) => {
                const music = res.data;
                this.setState({
                    music: music,
                    searchList: music
                });
            })
    }

    render() {
        return (
            <div className='background'>
                <SearchBar songs={this.state.music} filterSongs={this.handleSearchCallBack}/>
                <DataMapper songs={this.state.searchList} />
            </div>
        )
    }
}

export default App;