import React, { Component } from "react";
import { X } from "react-feather";
import "./Modal.css";

class Modal extends Component {
  render() {
    const { isOpen, children, closeModal } = this.props;
    const classNames = isOpen ? "modal display-block" : "display-none";
    return (
      <div className={classNames}>
        <section className="modal-main">
          <button onClick={closeModal} className="modal-closebutton">
            <X />
          </button>
          {children}
        </section>
      </div>
    );
  }
}

export default Modal;
