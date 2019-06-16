import React, { Component } from 'react';
import Heading from './Heading';
import './App.css';
import NameForm from './form';
import Button from './Button'

class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        < Heading />
      </header>
      < NameForm />
      
      
    </div>
    
  );
}
}

export default App;
