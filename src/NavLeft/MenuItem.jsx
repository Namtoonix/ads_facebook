import React from "react";
import PropTypes from "prop-types";
import { arrIcon } from "./importIcon";
import { Link } from "react-router-dom";

MenuItem.propTypes = {
  menu: PropTypes.object.isRequired,
};

function MenuItem(props) {
  const { menu } = props;

  const checkHasIcon = (icon, alt) => {
    if (!icon) return;
    return <img src={arrIcon[icon]} alt={alt} />;
  };

  return (
    <Link to={menu.link} className="nav-link">
      {checkHasIcon(menu.icon, menu.title)}
      <span>{menu.title}</span>
    </Link>
  );
}

export default MenuItem;
