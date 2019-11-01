import React from "react";
import folderIcon from "../../assets/folderIcon.png";
import "./Folder.css";

const Folder = ({ title, url, openFolder }) => {
  return (
    <div className="folder" onDoubleClick={() => openFolder(url)}>
      <img src={folderIcon} alt={title} className="folder__icon" />
      <span className="folder--title">{title}</span>
    </div>
  );
};

export default Folder;
