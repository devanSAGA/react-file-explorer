import React from "react";
import { ChevronUp, ChevronDown } from "react-feather";
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

  selectFolder = (type, url) => {
    if (type === "folder") {
      this.toggleMenuItem();
      this.props.handleCurrentPathChange(url);
    }
  };

  render() {
    const { title, type, childNodes, url } = this.props;
    const { isOpened } = this.state;
    return (
      <div className="menu-item">
        <div
          onClick={() => this.selectFolder(type, url)}
          className="menu-item__heading"
        >
          <div className={"menu-item__heading--text "}>
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
                return (
                  <MenuItem
                    {...item}
                    handleCurrentPathChange={this.props.handleCurrentPathChange}
                  />
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

export default MenuItem;
