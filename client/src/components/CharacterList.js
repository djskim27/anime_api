import React, { Component } from 'react';
import Character from './Character';

class CharacterList extends Component {
    
    render() {
        console.log(this.props.animeData)
        const animeList = this.props.animeData.map((character, i)=>{
            return (
                <Character 
                    key={i}
                    name={character.name}
                    anime={character.anime}
                    image={character.image}
                    specialMove={character.special_move}
                    id={character.id}
                />
            )            
        })
        
        return (
            

            <div>
                {animeList}
            </div>
        );
    }
}

export default CharacterList;