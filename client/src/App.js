import React, { Component } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CharacterShow from './components/CharacterShow';
import CharacterEdit from './components/CharacterEdit';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/character/:id' component={CharacterShow}/>
          <Route exact path='/character/:id/edit' component={CharacterEdit}/>
          {/* <Route exact path='/' component={Homepage}/> */}
        </div>
      </Router>
    );
  }
}

export default App;
