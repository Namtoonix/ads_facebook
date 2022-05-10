import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import logo from "../assets/Icon-Facebook/logo_hara_W.png";
import "./navLeft.scss";

NavLeft.propTypes = {
  menuList: PropTypes.array.isRequired,
};

function NavLeft(props) {
  const { menuList } = props;

  const checkHasLink = (menu) => {
    if (!menu.link) return;
    return <MenuItem key={menu.id} menu={menu} />;
  };

  const handleShowSubmenu = (submenu) => {
    return submenu.map((menuChild, index) => (
      <MenuItem key={menuChild.id} menu={menuChild} />
    ));
  };

  const checkHasSubMenu = (menu, index) => {
    if (!menu.submenu) {
      return (
        <li key={index} className="nav-item">
          {checkHasLink(menu)}
        </li>
      );
    } else {
      return (
        <li key={index} className="nav-item">
          {checkHasLink(menu)}
          <ul className="submenu">{handleShowSubmenu(menu.submenu)}</ul>
        </li>
      );
    }
  };

  const showNavLeft = (menuList) => {
    if (!menuList) return;
    return menuList.map((menu, index) => checkHasSubMenu(menu, index));
  };

  return (
    <nav className="nav-container">
      <Link to="/" className="navbar-brand">
        <img alt="" src={logo} />
      </Link>
      <ul className="navbar-nav">{showNavLeft(menuList)}</ul>
    </nav>
  );
}

export default NavLeft;
