import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteFolder } from "../../actions/directories";
import Modal from "../Modal";
import Info from "../Info";
import ContextMenu from "../ContextMenu";
import folderIcon from "../../assets/folderIcon.png";
import "./Folder.css";

class Folder extends Component {
  state = {
    showInfoModal: false
  };

  handleRightClick = event => {
    event.preventDefault();
    this.props.openContextMenu(this.props.title);
  };

  openInfoModal = () => {
    this.setState({
      showInfoModal: true
    });
    this.props.closeContextMenu();
  };

  closeInfoModal = () => {
    this.setState({
      showInfoModal: false
    });
  };

  render() {
    const { title, url, info, openFolder, showContextMenu } = this.props;
    return (
      <>
        <div
          className="folder"
          onContextMenu={this.handleRightClick}
          onDoubleClick={() => openFolder(url)}
        >
          <img src={folderIcon} alt={title} className="folder__icon" />
          <span className="folder--title">{title}</span>
          {showContextMenu ? (
            <ContextMenu>
              <button
                className="context-menu__actions--primary"
                onClick={() => openFolder(url)}
              >
                Open
              </button>
              <button
                onClick={() => this.openInfoModal(title)}
                className="context-menu__actions--primary"
              >
                Info
              </button>
              <button
                onClick={() => this.props.deleteFolder(url)}
                className="context-menu__actions--danger"
              >
                Delete
              </button>
            </ContextMenu>
          ) : null}
        </div>
        <Modal
          isOpen={this.state.showInfoModal}
          closeModal={this.closeInfoModal}
        >
          <Info title={title} type="folder" info={info} />
        </Modal>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteFolder: folderPath => dispatch(deleteFolder(folderPath))
});

export default connect(
  null,
  mapDispatchToProps
)(Folder);
