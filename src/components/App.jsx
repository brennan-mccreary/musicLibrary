import { render } from '@testing-library/react';
import React, { Component } from 'react';
import axios from 'axios';
import DataMapper from './DataMapper/DataMapper';
import SearchBar from './SearchBar/SearchBar';
import ResultCounter from './ResultCounter/ResultCounter';
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            music: [],
            search: ""
        }
    }

    componentDidMount() {
        this.getAll();        
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    };

    // handleSearchCallBack = (search, songs) => {
    //     let newSongs = songs.filter((el) => filterObject(el, search));    
    //     this.setState({
    //         searchList: newSongs
    //     });

    //     function filterObject(el, search) {
    //         let val = Object.values(el);
    //         for(let i = 0; i < val.length; i++) {
    //             if (val[i].toString().toLowerCase().includes(search.toLowerCase(),-1)) {
    //                 return true;
    //             }
    //         }
    //         return false;
    //     }
    // };

    getAll = async () => {
        await axios
            .get("http://www.devcodecampmusiclibrary.com/api/music")
            .then((res) => {
                const music = res.data;
                this.setState({
                    music: music
                });
            })
    }

    render() {
        return (
            <div className='background'>
                <SearchBar songs={this.state.music} search={this.state.search} handleChange={this.handleChange}/>
                <ResultCounter songs={this.state.music} search={this.state.search} />
                <DataMapper songs={this.state.music} search={this.state.search} />
            </div>
        )
    }
}

export default App;