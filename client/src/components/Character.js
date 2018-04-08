import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Character extends Component {
    render() {
        return (
            <div>
                <Link to={`/character/${this.props.id}`}><h3>{this.props.name}</h3></Link>
            </div>
        );
    }
}

export default Character;