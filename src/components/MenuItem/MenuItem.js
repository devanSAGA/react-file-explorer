import React from "react";
import { FileText, Folder, ChevronUp, ChevronDown } from "react-feather";
import "./MenuItem.css";

class MenuItem extends React.Component {
  state = {
    isOpened: false
  };

  toggleMenuItem = () => {
    this.setState(state => ({
      isOpened: !state.isOpened
    }));
  };

  render() {
    const { title, type, childNodes } = this.props;
    const { isOpened } = this.state;
    return (
      <div className="menu-item">
        <div onClick={this.toggleMenuItem} className="menu-item__heading">
          <div className={"menu-item__heading--text "}>
            {type === "folder" ? (
              <Folder className="icon" />
            ) : (
              <FileText className="icon" />
            )}
            <span>{title}</span>
          </div>
          {type === "folder" && childNodes.length ? (
            !isOpened ? (
              <ChevronDown
                size={16}
                className="icon menu-item__heading--icon"
              />
            ) : (
              <ChevronUp size={16} className="icon menu-item__heading--icon" />
            )
          ) : null}
        </div>
        <div className="sub-menu-list ">
          {isOpened && childNodes.length
            ? childNodes.map(item => {
                return <MenuItem {...item} />;
              })
            : null}
        </div>
      </div>
    );
  }
}

export default MenuItem;
