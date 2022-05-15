import React from "react";
import PropTypes from "prop-types";
import { Switch } from "antd";

Campaign.propTypes = {
  currentItems: PropTypes.array.isRequired,
};

function Campaign(props) {
  const { currentItems } = props;

  const handleShowLocal = (localList) =>
    localList.map((local, index) => <button key={index}>{local.label}</button>);

  return currentItems.map((item, index) => (
    <ul key={index} className="tr-element">
      <li>
        <Switch defaultChecked />
      </li>
      <li>{item.name}</li>
      <li className="local-item">
        {item.sex}; {item.oldFrom}-{item.oldTo}+ <br></br>
        {handleShowLocal(item.local)}
      </li>
      <li>
        {item.dayStart} - {item.dayEnd}
      </li>
      <li>{item.budget} đ</li>
    </ul>
  ));
}

export default Campaign;
