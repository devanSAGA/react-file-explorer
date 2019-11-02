import React from "react";
import folderIcon from "../../assets/folderIcon.png";
import fileIcon from "../../assets/fileIcon.png";
import "./Info.css";

const Info = props => {
  const { title, type, info = {} } = props;
  return (
    <div className="info">
      <h3 className="info__heading">
        {type === "file" ? "File Info" : "Folder Info"}
      </h3>
      <img
        alt={type === "file" ? "file-icon" : "folder-icon"}
        src={type === "file" ? fileIcon : folderIcon}
        className="info__icon"
      />
      <table className="info__table">
        <tr>
          <th className="info__table--label">Name: </th>
          <td className="info__table--value">{title}</td>
        </tr>
        <tr>
          <th className="info__table--label">Size: </th>
          <td className="info__table--value">{info.size}</td>
        </tr>
        <tr>
          <th className="info__table--label">Creator Name: </th>
          <td className="info__table--value">{info.creator}</td>
        </tr>
        <tr>
          <th className="info__table--label">Created Date: </th>
          <td className="info__table--value">{info.date}</td>
        </tr>
      </table>
    </div>
  );
};

export default Info;
