import React, { Component } from "react";
import ContentHeader from "../ContentHeader";
import FolderView from "../FolderView";
import "./Main.css";

class Main extends Component {
  state = {
    selectedFoldersContent: this.props.directories
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.currentPath !== this.props.currentPath ||
      prevProps.directories !== this.props.directories
    ) {
      this.getSelectedFoldersContent(this.props.currentPath);
    }
  }

  getSelectedFoldersContent = currentPath => {
    const { directories } = this.props;
    if (currentPath === "/") {
      this.setState({
        selectedFoldersContent: directories
      });
    } else {
      const foldersList = currentPath.split("/");
      let selectedFoldersContent = directories;

      const findFolder = (folderName, foldersList) => {
        return foldersList.childNodes[folderName];
      };

      for (let i = 1; i < foldersList.length; i++) {
        selectedFoldersContent = findFolder(
          foldersList[i],
          selectedFoldersContent
        );
      }
      this.setState({
        selectedFoldersContent
      });
    }
  };

  render() {
    const { currentPath, updateCurrentPath, goBack, openFolder } = this.props;
    const { selectedFoldersContent } = this.state;
    console.log(selectedFoldersContent);
    return (
      <div className="main">
        <ContentHeader
          currentPath={currentPath}
          updateCurrentPath={updateCurrentPath}
          goBack={goBack}
        />
        <FolderView
          selectedFoldersContent={selectedFoldersContent}
          openFolder={openFolder}
          currentPath={currentPath}
        />
      </div>
    );
  }
}

export default Main;
