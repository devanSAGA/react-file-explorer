import React from "react";
import Breadcrumb from "../Breadcrumb";
import "./ContentHeader.css";

const ContentHeader = props => {
  return (
    <div className="content__header">
      <Breadcrumb {...props} />
    </div>
  );
};
export default ContentHeader;
