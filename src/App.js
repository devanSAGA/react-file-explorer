import React, { Component } from "react";
import { connect } from "react-redux";

import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./App.css";

class App extends Component {
  state = {
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
          directories={this.props.directories}
          handleCurrentPathChange={this.handleCurrentPathChange}
        />
        <Main
          directories={this.props.directories}
          currentPath={this.state.currentPath}
          updateCurrentPath={this.updateCurrentPath}
          goBack={this.goBack}
          openFolder={this.openFolder}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    directories: state.directories
  };
};

export default connect(mapStateToProps)(App);
