import React from "react";
import fileIcon from "../../assets/fileIcon.png";
import "./File.css";

const File = ({ title, showContextMenu, openContextMenu }) => {
  const handleRightClick = event => {
    event.preventDefault();
    openContextMenu(title);
  };

  return (
    <div className="file" onContextMenu={handleRightClick}>
      <img src={fileIcon} alt={title} className="file--icon" />
      <span className="file--title">{title}</span>
      {showContextMenu ? (
        <div className="context-menu">
          <div className="context-menu__actions">
            <button className="context-menu__actions--primary">Open</button>
            <button className="context-menu__actions--primary">Info</button>
            <button className="context-menu__actions--danger">Delete</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default File;
