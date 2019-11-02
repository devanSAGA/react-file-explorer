import React from "react";
import "./ContextMenu.css";

const ContextMenu = props => {
  return (
    <div className="context-menu">
      <div className="context-menu__actions">{props.children}</div>
    </div>
  );
};
export default ContextMenu;
