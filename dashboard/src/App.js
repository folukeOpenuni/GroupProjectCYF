import React from "react";
import "./App.css";
import DashboardCard from "./Components/DashboardCard";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      modalShow: false
    };
  }

  render() {
    return (
      <div className="App">
        <DashboardCard />
      </div>
    );
  }
}

export default App;
