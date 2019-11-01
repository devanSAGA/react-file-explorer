import React, { Component } from "react";
import folderIcon from "../../assets/folderIcon.png";
import "./Folder.css";

class Folder extends Component {
  handleRightClick = event => {
    event.preventDefault();
    this.props.openContextMenu(this.props.title);
  };

  render() {
    const { title, url, openFolder, showContextMenu } = this.props;
    return (
      <div
        className="folder"
        onContextMenu={this.handleRightClick}
        onDoubleClick={() => openFolder(url)}
      >
        <img src={folderIcon} alt={title} className="folder__icon" />
        <span className="folder--title">{title}</span>
        {showContextMenu ? (
          <div className="context-menu">
            <div className="context-menu__actions">
              <button
                className="context-menu__actions--primary"
                onClick={() => openFolder(url)}
              >
                Open
              </button>
              <button className="context-menu__actions--primary">Info</button>
              <button className="context-menu__actions--danger">Delete</button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Folder;
