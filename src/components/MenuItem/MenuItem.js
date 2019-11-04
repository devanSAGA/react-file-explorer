import React from "react";
import { isEmpty } from "../../utils/functions";
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
    const hasChildNodes = !isEmpty(childNodes);
    return (
      <div className="menu-item">
        <div
          onClick={() => this.selectFolder(type, url)}
          className="menu-item__heading"
        >
          <div className={"menu-item__heading--text "}>
            <span>{title}</span>
          </div>
          {type === "folder" && hasChildNodes ? (
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
          {isOpened && hasChildNodes
            ? Object.entries(childNodes).map(([key, item], index) => {
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
