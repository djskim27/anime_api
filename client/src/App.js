import React, { Component } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CharacterShow from './components/CharacterShow';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/character/:id' component={CharacterShow}/>
          {/* <Route exact path='/' component={Homepage}/> */}
        </div>
      </Router>
    );
  }
}

export default App;
