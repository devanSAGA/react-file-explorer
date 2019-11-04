import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteFile } from "../../actions/directories";
import Modal from "../Modal";
import Info from "../Info";
import ContextMenu from "../ContextMenu";
import fileIcon from "../../assets/fileIcon.png";
import "./File.css";

class File extends Component {
  state = {
    showInfoModal: false
  };

  handleRightClick = event => {
    const { openContextMenu, title } = this.props;
    event.preventDefault();
    openContextMenu(title);
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
    const { title, showContextMenu, info, url } = this.props;
    return (
      <>
        <div className="file" onContextMenu={this.handleRightClick}>
          <img src={fileIcon} alt={title} className="file--icon" />
          <span className="file--title">{title}</span>
          {showContextMenu ? (
            <ContextMenu>
              <button
                onClick={() => this.openInfoModal(title)}
                className="context-menu__actions--primary"
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
                onClick={() => this.props.deleteFile(url)}
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
          <Info title={title} type="file" info={info} />
        </Modal>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteFile: filePath => dispatch(deleteFile(filePath))
});

export default connect(
  null,
  mapDispatchToProps
)(File);
