import React, { Component } from "react";
import File from "../File";
import Folder from "../Folder";
import "./FolderView.css";

class FolderView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContextMenuOf: ""
    };
    this.folderViewContainer = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef = node => {
    this.folderViewContainer = node;
  };

  handleClickOutside = event => {
    if (
      this.folderViewContainer &&
      !this.folderViewContainer.contains(event.target)
    ) {
      this.setState({
        showContextMenuOf: ""
      });
    }
  };

  openContextMenu = title => {
    this.setState({ showContextMenuOf: title });
  };

  render() {
    const { selectedFoldersContent, openFolder } = this.props;
    return (
      <div className="folder-view" ref={this.setWrapperRef}>
        {selectedFoldersContent.map((item, index) => {
          return item.type === "folder" ? (
            <Folder
              title={item.title}
              url={item.url}
              openFolder={openFolder}
              showContextMenu={item.title === this.state.showContextMenuOf}
              openContextMenu={this.openContextMenu}
            />
          ) : (
            <File
              title={item.title}
              showContextMenu={item.title === this.state.showContextMenuOf}
              openContextMenu={this.openContextMenu}
            />
          );
        })}
      </div>
    );
  }
}
export default FolderView;
