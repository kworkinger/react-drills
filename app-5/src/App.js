import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Img from './Img'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Img url={"https://th.bing.com/th/id/R.560f49db642f0c9c6ed298bbfa001445?rik=bGGwnNB0cipJ%2bg&riu=http%3a%2f%2fcausticsodapodcast.com%2fwp-content%2fuploads%2f2012%2f11%2fBlack-Rhino-1024x1024.png&ehk=Jj3aYI1LTiV4xbj3lCX9tLplyCHg%2bTJwN4twLdJ8x7M%3d&risl=&pid=ImgRaw&r=0"} />
        </div>
      );
  }
}

export default App;
