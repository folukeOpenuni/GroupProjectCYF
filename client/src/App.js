import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    location: []
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/locations`).then(res => {
      const locations = res.data;
      console.log(locations);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

// axios.get(`http://localhost:3000/locations`).then(res => {
//   const locations = res.data;
//   this.setState({ locations });
// });
