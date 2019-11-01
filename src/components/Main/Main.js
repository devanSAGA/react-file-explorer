import React, { Component } from "react";
import ContentHeader from "../ContentHeader";
import FolderView from "../FolderView";
import "./Main.css";

class Main extends Component {
  state = {
    selectedFoldersContent: []
  };

  componentDidMount() {
    this.getSelectedFoldersContent(this.props.currentPath);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentPath !== this.props.currentPath) {
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
        for (let folder of foldersList) {
          if (folder && folder.title === folderName) {
            return folder.childNodes;
          }
        }
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
    return (
      <div className="main">
        <ContentHeader
          currentPath={currentPath}
          updateCurrentPath={updateCurrentPath}
          goBack={goBack}
        />
        <FolderView
          currentPath={currentPath}
          selectedFoldersContent={selectedFoldersContent}
          openFolder={openFolder}
        />
      </div>
    );
  }
}

export default Main;
