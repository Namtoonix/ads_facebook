import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-routes";

MenuItem.propTypes = {
  menu: PropTypes.object.isRequired,
};

function MenuItem(props) {
  const { menu } = props;

  const checkHasIcon = (icon, alt) => {
    if (!icon) return;
    return <img src={icon} alt={alt} />;
  };
  return (
    <li className="nav-item">
      <Link to={menu.link} className="nav-link">
        {checkHasIcon(menu.icon, menu.title)}
        <span>{menu.title}</span>
      </Link>
    </li>
  );
}

export default MenuItem;
