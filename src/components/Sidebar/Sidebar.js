import React from "react";

import MenuItem from "../MenuItem";
import "./Sidebar.css";

const Sidebar = ({ directories }) => {
  return (
    <div className="sidebar">
      <div className="menu">
        {directories.map((item, index) => {
          return <MenuItem {...item} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
