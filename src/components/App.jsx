import { render } from '@testing-library/react';
import React, { Component } from 'react';
import axios from 'axios';
import DataMapper from './DataMapper/DataMapper';

class App extends Component {
    constructor() {
        super();
        this.state = {
            music: [],
        }

    }

    componentDidMount() {
        this.getAll();
    }

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
                <DataMapper songs={this.state.music}/>
            </div>
        )
    }
}

export default App;