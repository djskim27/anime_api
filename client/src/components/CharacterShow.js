import React, { Component } from 'react';
import axios from 'axios';

class CharacterShow extends Component {
    state = {
        character:{

        }
    }

    componentWillMount() {
        this._setCharacterData();
    }

    _setCharacterData = async() => {
        // e.preventDefault();
        const res = await axios.get(`/api/characters/${this.props.match.params.id}`)
        console.log(res.data)
        this.setState({
            character: res.data
        })       
        console.log(this.state.character)
    }

    render() {
        
        return (
            <div>
                <h2>{this.state.character.name}</h2>
                <img src={this.state.character.image} className="imgSize"/>
                <p><strong>Anime:</strong> {this.state.character.anime}</p>
                <p><strong>Special Move:</strong> {this.state.character.special_move}</p>
            </div>
        );
    }
}

export default CharacterShow;