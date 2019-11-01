import React from "react";
import fileIcon from "../../assets/fileIcon.png";
import "./File.css";

const File = ({ title }) => {
  return (
    <div className="file">
      <img src={fileIcon} alt={title} className="file--icon" />
      <span className="file--title">{title}</span>
    </div>
  );
};

export default File;
