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

  handleCurrentPathChange = newPath => {
    this.setState({
      currentPath: newPath
    });
  };

  updateCurrentPath = index => {
    if (index === 0) {
      this.handleCurrentPathChange("/");
    } else {
      const folders = this.state.currentPath.split("/");
      const updatedPath = folders.slice(0, index + 1).join("/");
      this.handleCurrentPathChange(updatedPath);
    }
  };

  goBack = () => {
    const folders = this.state.currentPath.split("/");
    if (folders.length > 1) {
      const updatedPath =
        folders.slice(0, folders.length - 1).length === 1
          ? "/"
          : folders.slice(0, folders.length - 1).join("/");
      this.handleCurrentPathChange(updatedPath);
    }
  };

  openFolder = pathOfClickedFolder => {
    this.handleCurrentPathChange(pathOfClickedFolder);
  };

  render() {
    return (
      <div className="App">
        <Sidebar
          directories={this.state.directories}
          handleCurrentPathChange={this.handleCurrentPathChange}
        />
        <Main
          directories={this.state.directories}
          currentPath={this.state.currentPath}
          updateCurrentPath={this.updateCurrentPath}
          goBack={this.goBack}
          openFolder={this.openFolder}
        />
      </div>
    );
  }
}

export default App;
