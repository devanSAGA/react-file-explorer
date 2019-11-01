import React from "react";
import upArrorwIcon from "../../assets/upArrorwIcon.png";
import "./Breadcrumb.css";

const Breadcrumb = ({ currentPath, updateCurrentPath, goBack }) => {
  const folders =
    currentPath === "/" ? ["root"] : ("root" + currentPath).split("/");
  return (
    <div className="breadcrumb">
      <button
        onClick={goBack}
        className="breadcrumb--goback"
        disabled={currentPath === "/"}
      >
        <img src={upArrorwIcon} alt="go-back" />
      </button>
      {folders.map((folder, index) => {
        return index === folders.length - 1 ? (
          <div className="breadcrumb__folder is-last">
            <span className="breadcrumb__folder--text">{folder}</span>
          </div>
        ) : (
          <div className="breadcrumb__folder is-not-last">
            <span
              className="breadcrumb__folder--text"
              onClick={() => updateCurrentPath(index)}
            >
              {folder}
            </span>
            <span className="breadcrumb__folder--slash">/</span>
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
