import React, { Component } from 'react';
import CharacterList from './CharacterList';
import axios from 'axios';

class Homepage extends Component {
    state = {
        animeData: []
    }

    componentWillMount() {
        this._setCharacterData();
    }

    _setCharacterData = async(e) => {
        // e.preventDefault();
        const res = await axios.get("/api/characters")
        this.setState({
            animeData: res.data
        })        
    }

    render() {
        return (
            <div>
                <CharacterList animeData={this.state.animeData}/>
            </div>
        );
    }
}

export default Homepage;