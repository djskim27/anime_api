import React, { Component } from 'react'
import axios from 'axios';
export default class CharacterEdit extends Component {
    state = {
        character: {
            name: '',
            anime: '',
            image: '',
            special_move: ''
        }
    }
    componentDidMount() {
        this._setCharacterData();
    }

    _setCharacterData = () => {
        this.setState(
            {
                character: {
                    name: this.props.location.state.character.name,
                    anime: this.props.location.state.character.anime,
                    image: this.props.location.state.character.image,
                    special_move: this.props.location.state.character.special_move
                }
            }
        )
    }

    _handleChange = (e) => {
        const attributeName = e.target.name;
        const attributeValue = e.target.value;
        const character = {...this.state.character}
        character[attributeName] = attributeValue;
        this.setState({character});
    }

    _editCharacter = async (e) => {
        e.preventDefault();
        const payload = this.state.character;
        try {
            const res = await axios.patch(`/api/characters/${this.props.match.params.id}`, payload);
            console.log(res)
            
        } catch (err) {
            console.log(err)
        }
    }
  render() {
      const character = this.props.location.state.character
      console.log(character)
    return (
      <div>
          <h3> Edit Character</h3>
          <form onSubmit={this._editCharacter}>
              <div>
                  <label>Name:</label>
                  <input onChange={this._handleChange} type="text" name="name" value={this.state.character.name}/>
              </div>
              <div>
                  <label>Anime:</label>
                  <input onChange={this._handleChange} type="text" name="anime" value={this.state.character.anime}/>
              </div>
              <div>
                  <label>Image:</label>
                  <input onChange={this._handleChange} type="text" name="image" value={this.state.character.image}/>
              </div>
              <div>
                  <label>S.Move:</label>
                  <input onChange={this._handleChange} type="text" name="special_move" value={this.state.character.special_move}/>
              </div>
              <br/>
              <button>Save Changes</button>
          </form>
      </div>
    )
  }
}
