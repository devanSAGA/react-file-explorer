import React from "react";
import File from "../File";
import Folder from "../Folder";
import "./FolderView.css";

const FolderView = ({ currentPath, selectedFoldersContent, openFolder }) => {
  return (
    <div className="folder-view">
      {selectedFoldersContent.map((item, index) => {
        return item.type === "folder" ? (
          <Folder title={item.title} url={item.url} openFolder={openFolder} />
        ) : (
          <File title={item.title} />
        );
      })}
    </div>
  );
};
export default FolderView;
