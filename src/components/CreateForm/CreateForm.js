import React, { Component } from "react";
import "./CreateForm.css";

class CreateForm extends Component {
  state = {
    type: "folder",
    name: "",
    creator: "",
    size: "",
    date: "",
    error: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  toggleType = () => {
    this.setState(state => {
      if (state.type === "file") {
        return {
          type: "folder"
        };
      } else {
        return {
          type: "file"
        };
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form create-new-form">
        <h3 className="form__heading">Create New</h3>
        <div className="form__toggle">
          <div
            className={
              "form__toggle--leftoption " +
              (this.state.type === "file" ? "selected" : "not-selected")
            }
            onClick={this.toggleType}
          >
            File
          </div>
          <div
            className={
              "form__toggle--rightoption " +
              (this.state.type === "folder" ? "selected" : "not-selected")
            }
            onClick={this.toggleType}
          >
            Folder
          </div>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form__input"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="creator"
          placeholder="Creator"
          className="form__input"
          value={this.state.creator}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="size"
          placeholder="Size"
          className="form__input"
          value={this.state.size}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="date"
          placeholder="Date"
          className="form__input"
          value={this.state.date}
          onChange={this.handleChange}
        />
        <button className="form__button">Create</button>
      </form>
    );
  }
}

export default CreateForm;
