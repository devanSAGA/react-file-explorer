import React, { Component } from "react";
import File from "../File";
import Folder from "../Folder";
import Modal from "../Modal";
import CreateForm from "../CreateForm";
import AddNewFolder from "../../assets/AddNewFolder.png";
import "./FolderView.css";

class FolderView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContextMenuOf: "",
      showCreateFolderModal: false
    };
    this.folderViewRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef = node => {
    this.folderViewRef = node;
  };

  handleClickOutside = event => {
    if (this.folderViewRef && !this.folderViewRef.contains(event.target)) {
      this.closeContextMenu();
    }
  };

  openContextMenu = title => {
    this.setState({ showContextMenuOf: title });
  };

  closeContextMenu = () => {
    this.setState({
      showContextMenuOf: ""
    });
  };

  openCreateFolderForm = () => {
    this.setState({
      showCreateFolderModal: true
    });
  };

  closeCreateFolderForm = () => {
    this.setState({
      showCreateFolderModal: false
    });
  };

  render() {
    const { selectedFoldersContent, openFolder, currentPath } = this.props;
    return (
      <div className="folder-view" ref={this.setWrapperRef}>
        {Object.entries(selectedFoldersContent.childNodes).map(
          ([key, item], index) => {
            return item.type === "folder" ? (
              <Folder
                title={item.title}
                url={item.url}
                info={item.info}
                openFolder={openFolder}
                showContextMenu={item.title === this.state.showContextMenuOf}
                openContextMenu={this.openContextMenu}
                closeContextMenu={this.closeContextMenu}
                openInfoModal={this.openInfoModal}
              />
            ) : (
              <File
                title={item.title}
                url={item.url}
                info={item.info}
                showContextMenu={item.title === this.state.showContextMenuOf}
                openContextMenu={this.openContextMenu}
                closeContextMenu={this.closeContextMenu}
                openInfoModal={this.openInfoModal}
              />
            );
          }
        )}
        <button
          className="create-new__button"
          onClick={this.openCreateFolderForm}
        >
          <img src={AddNewFolder} alt="create-new" />
        </button>
        <Modal
          isOpen={this.state.showCreateFolderModal}
          closeModal={this.closeCreateFolderForm}
        >
          <CreateForm
            currentPath={currentPath}
            closeCreateFolderForm={this.closeCreateFolderForm}
          />
        </Modal>
      </div>
    );
  }
}
export default FolderView;
