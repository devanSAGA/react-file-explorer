import React, { Component } from "react";

import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { DEFAULT_FOLDER_CONFIG } from "./utils/config";
import "./App.css";

class App extends Component {
  state = {
    directories: DEFAULT_FOLDER_CONFIG,
    currentPath: "/"
  };

  handleCurrentPathChange = () => {};

  render() {
    return (
      <div className="App">
        <Sidebar directories={this.state.directories} />
        <Main
          directories={this.state.directories}
          currentPath={this.state.currentPath}
        />
      </div>
    );
  }
}

export default App;
