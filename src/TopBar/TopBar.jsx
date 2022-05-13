import React from "react";
import ActionRight from "./ActionRight";
import Breadcrumb from "./Breadcrumb";
import "./topBar.scss";

TopBar.propTypes = {};

function TopBar(props) {
  return (
    <div className="topbar">
      <Breadcrumb />
      <ActionRight />
    </div>
  );
}

export default TopBar;
