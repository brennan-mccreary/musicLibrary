import { render } from '@testing-library/react';
import React, { Component } from 'react';
import axios from 'axios';
import DataMapper from './DataMapper/DataMapper';
import SearchBar from './SearchBar/SearchBar';
import ResultCounter from './ResultCounter/ResultCounter';
import SongEditor from './SongEditor/SongEditor';
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            music: [],
            search: "",
            targetItem: "0",
            target: undefined
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

    handleSongChange = (event) => {
        this.setState({
            target: Object.assign(this.state.target, {[event.target.name] : event.target.value})
        })
    };

    handleSongSubmit = (event) => {
        event.preventDefault();
        this.updateSongByID(this.state.targetItem, this.state.target);
        
        document.getElementById("song-table").hidden = false;
        document.getElementById("result-counter").hidden = false;
        document.getElementById("song-editor").hidden = true;
    }

    handleClickEdit = (event) => {
        let item = event.target.parentElement.parentElement.firstElementChild.innerHTML
        console.log(item);
        this.setState({
            targetItem: parseInt(item)
        });
        this.getSongByID(item);
    }

    handleClickDelete = (event) => {
        let item = event.target.parentElement.parentElement.firstElementChild.innerHTML
        console.log(item);
        this.deleteSongByID(item);
    }


    getAll = async () => {
        await axios
            .get("http://localhost:5000/api/songs")
            .then((res) => {
                const music = res.data;
                this.setState({
                    music: music
                });
            })
    }

    getSongByID = async (id) => {
        await axios
            .get(`http://localhost:5000/api/songs/${id}`)
            .then((res) => {
                const song = res.data;
                this.setState({
                    target: song
                });
            })
    }

    updateSongByID = async (id, target) => {
        await axios
        .put(`http://localhost:5000/api/songs/${id}`, target)
        .then((res) => {
            const song = res.data;
            this.setState({
                music: song,
                target: undefined,
                targetItem: {}
            });
            console.log(song);
        })
    }

    deleteSongByID = async (id) => {
        await axios
            .delete(`http://localhost:5000/api/songs/${id}`, )
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
                <SongEditor song={this.state.target} songChange={this.handleSongChange} songSubmit={this.handleSongSubmit}/>
                <ResultCounter songs={this.state.music} search={this.state.search} />
                <DataMapper songs={this.state.music} search={this.state.search} clickEdit={this.handleClickEdit} clickDelete={this.handleClickDelete}/>
            </div>
        )
    }
}

export default App;