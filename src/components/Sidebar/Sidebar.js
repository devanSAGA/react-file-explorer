import React from "react";

import MenuItem from "../MenuItem";
import "./Sidebar.css";

const Sidebar = ({ directories, handleCurrentPathChange }) => {
  return (
    <div className="sidebar">
      <div className="menu">
        {Object.entries(directories.childNodes).map(([key, item], index) => {
          return (
            <MenuItem
              {...item}
              handleCurrentPathChange={handleCurrentPathChange}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
