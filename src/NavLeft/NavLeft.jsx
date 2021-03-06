import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import "./navLeft.scss";
import iconPlus from "../assets/Icon-Facebook/icon6.png";
import arrow from "../assets/Icon-Facebook/arrow.png";

NavLeft.propTypes = {
  menuList: PropTypes.array.isRequired,
};

function NavLeft(props) {
  const { menuList } = props;

  const handleToggleSubmenu = (target) => {
    target.parentElement.parentElement.classList.toggle("active");
  };

  const checkHasLink = (menu) => {
    if (!menu.link) return;
    return <MenuItem key={menu.id} menu={menu} />;
  };

  const handleShowSubmenu = (submenu) => {
    return submenu.map((menuChild) => {
      if (menuChild.submenu) {
        let menuChildChild = menuChild.submenu;
        return (
          <li key={menuChild.id} className="nav-item has-child">
            <span>
              <MenuItem key={menuChild.id} menu={menuChild} />
              <img onClick={(e) => handleToggleSubmenu(e.target)} src={arrow} alt="" />
            </span>
            <ul className="submenu">
              {menuChildChild.map((submenuChildChild) =>
                checkHasSubMenu(submenuChildChild)
              )}
            </ul>
          </li>
        );
      } else {
        return <MenuItem key={menuChild.id} menu={menuChild} />;
      }
    });
  };

  const checkHasSubMenu = (menu) => {
    if (!menu) return;
    if (!menu.submenu) {
      return (
        <li key={menu.id} className="nav-item">
          {checkHasLink(menu)}
        </li>
      );
    } else {
      return (
        <li key={menu.id} className="nav-item has-child">
          <span>
            {checkHasLink(menu)}
            <img
              onClick={(e) => handleToggleSubmenu(e.target)}
              src={iconPlus}
              alt=""
            />
          </span>
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
        <svg width="141" height="38">
          <svg viewBox="0 0 706.4 174.4" enableBackground="new 0 0 706.4 174.4">
            <path
              fill="white"
              d="M80,123v3.3c2.3-1.1,4.7-2.3,7-3.4c3.6-1.8,7.3-3.7,11-5.7v-12.2v-0.1H80.2l0,0H80v0.1l0,0v17.9h0L80,123L80,123z"
            ></path>
            <path
              fill="white"
              d="M8.4,68.2l0.1,0.4l2.1,15.5l0.3,2.6l0,0.3l1.8,13l0.6,4.7l1.5,11.2l0.9,6.9l1.2,9l1.2,9l0.4,3.2c1.1,0.2,2.4,0.4,3.8,0.4c0.3,0,0.6,0,0.9,0c0.8,0,1.7,0,2.5-0.1c4.8-0.3,10.3-1.4,16.3-3.1l-0.1-0.5l-1.9-14.2l-0.5-3.9l-1.6-12l-0.8-6l-1.3-9.9L35.5,92l-0.7-5.3l-1-7.7l-1.4-10.3l-0.8-5.6l-0.4-3.2l-5.3,0.6l-11,1.2l-7.1,0.8l-0.2,0l0.2,1.6L8.4,68.2z"
            ></path>
            <path
              fill="white"
              d="M33.8,50.6l1.2,9.1l1.2,9l0.9,7l1.5,11.1l0.6,4.9l0.1,0.8l1.6,12.4l0.4,2.8l2,15.3l0.1,0.7l0.5,4.1l1.6,11.8l0.1,0.9c5.2-1.6,10.6-3.6,16.4-6V123l0.1-0.1H62v-17.9l0.1-0.1H62V86.8l0.1-0.1H62V68.8l0.1-0.1H80v0.1v17.9v0.1l0.1-0.1h17.9V68.8l0.1-0.1h17.9v0.1v17.9v0.1v17.9v0.1v2.3c0,0,2.9-1.7,4.4-2.5c4.6-2.7,9.2-5.4,13.7-8.1c3.5-2.1,6.9-4.1,10.2-6.2l-0.5-3.8l-1.1-8.5l-0.1-1.2l-1.1-8.4l-0.8-6.5l-1.5-11.6l-0.6-4.5l-1.7-13.6l-0.3-2.4l-0.9-7.1l-1.6,0.2l-9.7,1.1l-8.3,1l-2.5,0.3c0.8,1.8,1.8,3.3,2.5,4.6c0.3,0.5,0.5,0.9,0.8,1.4c0.2-0.1,0.3-0.1,0.5-0.2c0.1,0,0.3-0.1,0.4-0.1c1.1-0.1,2.2,0.4,2.8,1.2c0.3,0.4,0.5,0.9,0.6,1.4c0.2,1.5-0.8,2.9-2.3,3.3c-1-1.6-1.9-3.1-2.8-4.6c0,0,0,0,0,0c0-0.1-0.1-0.1-0.1-0.2c-2.5-3.9-4.9-7.4-7.2-10.6c-2-2.7-3.9-5.2-5.7-7.4c-0.8-0.9-1.5-1.8-2.3-2.6c-0.9-1-1.8-2-2.7-2.9c-2.4-2.3-4.6-4.2-6.8-5.6C87.6,0.8,84.1-0.2,80.9,0c-0.3,0-0.6,0.1-0.8,0.1C74,1.1,69.5,7,65.8,14.5c-1.3,2.7-2.6,5.6-3.8,8.7c-0.8,2.1-1.7,4.2-2.5,6.3c-0.4,1-0.8,2-1.2,3.1c-0.8,2.2-1.7,4.3-2.6,6.4c-0.9,2.2-1.9,4.2-2.8,6.1c-0.8-0.2-1.4-0.8-1.8-1.5c-0.2-0.4-0.3-0.8-0.3-1.3c0-1.6,1.3-2.9,2.9-2.9c0.2,0,0.5,0,0.7,0.1c0.6-1.9,1.4-4.1,2.2-6.9c0-0.1,0.1-0.2,0.1-0.3l-2.7,0.3l-10,1.1l-1.1,0.1l-11,1.3l1.1,8.6L33.8,50.6z M80,2.7c0.3-0.1,0.7-0.1,1-0.2c2.6-0.2,5.4,0.6,8.5,2.6c0.8,0.5,1.6,1.1,2.4,1.7c-1.1-0.4-2.1-0.8-3.1-1C86,5,83.4,4.9,81.5,5.2c-0.5,0-1,0.1-1.4,0.2c-3,0.6-5.7,1.8-8.2,3.7C74.2,5.7,76.9,3.3,80,2.7z M60.9,32.6c0.3-0.7,0.6-1.5,0.9-2.2c0.1-0.2,0.1-0.3,0.2-0.5c1.3-3.2,2.5-6.5,3.8-9.6c1.1-2.2,2.3-4.1,3.8-5.8C72.5,11,76.1,8.7,80,7.9c0.6-0.1,1.1-0.2,1.7-0.3c1.7-0.2,3.4-0.1,5.1,0.2c3.8,0.7,7.6,2.6,11.2,5.6c0.2,0.2,0.4,0.4,0.6,0.5c0.2,0.2,0.4,0.3,0.6,0.5c1.2,1,2.3,2.2,3.4,3.4c1.4,1.8,2.9,3.7,4.3,5.8c0.6,0.8,1.2,1.6,1.8,2.5l-4.8,0.6l-5.9,0.7l-14.5,1.7L80,29.5l-16.9,1.9l-0.5,0.1l-0.7,1l0,0l-0.4,0.6l-1.8,2.5c0.1-0.4,0.3-0.7,0.4-1.1C60.4,33.9,60.7,33.2,60.9,32.6z"
            ></path>
            <path
              fill="white"
              d="M143.7,59.3l1.2,9.4l0.9,6.5l0.1,0.5l1.4,11l0.2,1.8c1-0.6,2-1.2,3-1.8c0.6-0.4,1.1-0.7,1.7-1.1c1.1-0.7,2.2-1.4,3.3-2.1c5.2-3.3,10.2-6.5,14.8-9.5c2.8-1.9,5.6-3.7,8.1-5.4c2-1.3,3.8-2.6,5.6-3.8l-1.1-8.6l-0.1-1l-0.6-4.6l-1.3-9.8l-0.7,0.1l-9.9,1.1l-10.5,1.2l-7.5,0.9l-10.3,1.2l0.7,5.3L143.7,59.3z"
            ></path>
            <polygon
              fill="white"
              points="98.2,86.7 98.1,86.7 98.1,86.9 	"
            ></polygon>
            <polygon
              fill="white"
              points="98.1,104.9 98.2,104.8 98.1,104.8 	"
            ></polygon>
            <path
              fill="white"
              d="M170.3,106.9c-1.7,1.1-3.4,2.2-5.2,3.3c-4.1,2.6-8.4,5.2-12.8,7.9c-2.6,1.6-5.3,3.2-8,4.8c-3.3,1.9-6.6,3.9-10,5.8c-4.2,2.4-8.6,4.8-12.9,7.2c-1.7,0.9-3.4,1.9-5.2,2.8c-1.4,0.7-2.8,1.5-4.2,2.2c-4.6,2.4-9.3,4.8-13.9,7c-4.4,2.2-8.7,4.2-13,6.1c-1.7,0.8-3.4,1.5-5,2.2c-2.1,0.9-4.3,1.8-6.4,2.7c-4,1.6-7.9,3.1-11.7,4.4c-2.1,0.8-4.3,1.4-6.3,2.1c-4.1,1.3-8,2.3-11.7,3.1c-3.9,0.8-7.6,1.4-11.1,1.7c-1.6,0.1-3.1,0.2-4.6,0.2c-0.8,0-1.6,0-2.3-0.1c-2.1-0.1-4-0.3-5.9-0.7c0,0-0.1,0-0.1,0c1.8,1.1,3.8,2,6,2.8c0,0,0.1,0,0.1,0.1c1.1,0.4,2.3,0.7,3.5,1c4.3,0.9,9.1,1.1,14.4,0.7c1.1-0.1,2.1-0.2,3.2-0.3c4.7-0.6,9.6-1.5,14.8-2.9c2.8-0.7,5.7-1.6,8.6-2.5c3.1-1,6.3-2.1,9.5-3.2c5.2-1.9,10.5-4.1,15.9-6.4c0.7-0.3,1.4-0.6,2.1-0.9c0.6-0.3,1.3-0.6,1.9-0.8c5.4-2.4,10.8-5,16.1-7.6c5.7-2.8,11.3-5.7,16.8-8.7c0.4-0.2,0.8-0.5,1.3-0.7c0.6-0.3,1.2-0.6,1.8-1c5.6-3,11-6.1,16.2-9.1c4.3-2.5,8.4-4.9,12.3-7.3c2-1.2,3.9-2.4,5.7-3.5c3.4-2.1,6.7-4.1,9.7-6c3-1.9,5.9-3.7,8.4-5.4v-3v-0.1v-9.6c-4.4,2.9-9.4,6.2-14.8,9.6C172.5,105.5,171.4,106.2,170.3,106.9z"
            ></path>
            <path
              fill="white"
              d="M189.9,104.8l-0.2-1.3l-1.1-8.5c-0.1,0.1-0.2,0.1-0.3,0.2v9.6v0.1v3c0.6-0.4,1.2-0.8,1.8-1.2L189.9,104.8z"
            ></path>
            <path
              fill="white"
              d="M4.1,140.9c-0.9-4.4-0.6-9.4,0.3-14.4c0.2-1.2,0.5-2.4,0.8-3.6l0,0c0.8-3.3,1.7-6.4,2.7-9.4c0.7-2.1,1.4-4,2.2-5.8c-0.7,1.4-1.4,2.9-2.2,4.5c-1.5,3.3-3,6.9-4.3,10.7h0c-0.7,2.1-1.3,4.2-1.9,6.3c-1,4-1.6,7.9-1.7,11.8c0,2.5,0.2,5,0.7,7.3l4.2-4.3C4.6,142.9,4.3,141.9,4.1,140.9z"
            ></path>
            <path
              fill="white"
              d="M187.3,90.2l-0.3-2l-6.2,6.2C183.1,92.9,185.3,91.5,187.3,90.2z"
            ></path>
            <path
              fill="white"
              d="M25.9,166.5c3.4,0.2,7.2-0.1,11.4-0.7c2.2-0.3,4.4-0.8,6.7-1.3c5.6-1.3,11.7-3.2,18.1-5.5c0,0,0,0,0,0c0,0,0.1,0,0.1-0.1c5.8-2.1,11.7-4.6,17.9-7.3c4.7-2.1,9.4-4.3,14.2-6.7c1.3-0.6,2.6-1.3,3.9-1.9c1.4-0.7,2.7-1.4,4.1-2.1c4.7-2.4,9.3-4.9,13.9-7.4c5.9-3.2,11.7-6.5,17.3-9.8c0.3-0.1,0.5-0.3,0.8-0.4c0.3-0.2,0.5-0.3,0.8-0.5c6-3.5,11.7-7,17.3-10.3c4.3-2.7,8.5-5.2,12.4-7.7c1.9-1.2,3.8-2.4,5.6-3.6c3.8-2.4,7.3-4.7,10.5-6.8l6.2-6.2l-0.2-1.5l-1.5-11.4c-3,2-6.5,4.3-10.4,6.9c-1.5,1-3,2-4.6,3c-0.7,0.5-1.5,1-2.3,1.5c-4.8,3.1-10.1,6.5-15.8,10c-4.2,2.6-8.6,5.3-13.2,8c-1.6,1-3.3,1.9-4.9,2.9c-2.2,1.3-4.5,2.6-6.7,4c-3.7,2.2-7.5,4.3-11.3,6.4c-2.8,1.6-5.7,3.2-8.6,4.7c-3.2,1.7-6.3,3.4-9.5,5c-3.3,1.7-6.6,3.4-9.8,5c-2.8,1.4-5.5,2.7-8.2,3.9c-3.1,1.5-6.2,2.8-9.3,4.2c-3,1.3-5.9,2.5-8.8,3.6c-1.9,0.7-3.7,1.4-5.6,2.1c-4.3,1.6-8.5,2.9-12.5,4c-4.3,1.2-8.4,2.1-12.2,2.6c-2,0.3-4,0.5-5.8,0.6c-3.4,0.2-6.5,0-9.3-0.5c-0.8-0.2-1.6-0.4-2.3-0.6c-2.7-0.9-4.8-2.2-6.4-4c-1.3-1.4-2.2-3-2.9-4.8l-4.3,4.3c0.9,4.1,2.8,7.8,5.9,10.8c0.2,0.2,0.5,0.4,0.7,0.7c0.2,0.1,0.3,0.3,0.5,0.4c2.9,2.4,6.7,4.2,11.6,5.4c0.7,0.2,1.5,0.4,2.3,0.5C23.1,166.2,24.4,166.4,25.9,166.5z"
            ></path>
            <path
              fill="white"
              d="M245.8,62.8c-8.6,0-14.8,3-18.8,9.3l-2.5,3.8v-35h-11.1v87.5h11.1V91.7c0-5.3,1.6-9.7,4.7-12.8c3.1-3.2,7.4-4.8,12.7-4.8c11,0,16.8,6.2,16.8,17.9v36.4h11.1V88.9c0-7.1-2.2-13.3-6.5-18.2C258.6,65.4,252.9,62.8,245.8,62.8z"
            ></path>
            <polygon
              fill="white"
              points="521.9,103.3 505,62.8 492.5,62.8 521.9,128.2 551.3,62.8 538.7,62.8 	"
            ></polygon>
            <path
              fill="white"
              d="M699.8,70.6c-4.6-5.3-10.4-7.5-17.5-7.8c-16.5-0.7-21.3,10.4-21.3,10.4V62.7H650v65.6h11.1V91.7c0-5.3,1.6-9.6,4.7-12.8c3.1-3.2,7.4-4.8,12.7-4.8c11,0,16.8,6.2,16.8,17.9v36.4h11.1V88.9C706.4,81.7,704.2,75.6,699.8,70.6z"
            ></path>
            <path
              fill="white"
              d="M344.3,71.1c-6.1-4.6-12.7-7.3-20.4-7.3c-17.5,0-31.8,14.3-31.8,31.8s14.3,31.8,31.8,31.8c7.7,0,14.2-2.8,20.3-7.3v1.8v6.8h12.2v-24.1v-0.1v-14V90V62.4h-12.2V71.1z M323.9,115.7c-11.1,0-20.2-9.1-20.2-20.2c0-11.1,9.1-20.2,20.2-20.2c11.1,0,20.2,9.1,20.2,20.2C344.1,106.7,335,115.7,323.9,115.7z"
            ></path>
            <path
              fill="white"
              d="M469.5,71.1c-6.1-4.6-12.6-7.3-20.3-7.3c-17.5,0-31.8,14.3-31.8,31.8s14.3,31.8,31.8,31.8c7.7,0,14.2-2.8,20.3-7.3v1.8v6.8h12.2v-24.1v-0.1v-14V90V62.4h-12.2V71.1z M449.2,115.7c-11.1,0-20.2-9.1-20.2-20.2c0-11.1,9.1-20.2,20.2-20.2c11.1,0,20.2,9.1,20.2,20.2C469.4,106.7,460.3,115.7,449.2,115.7z"
            ></path>
            <path
              fill="white"
              d="M615,71.1c-6.1-4.6-12.5-7.3-20.2-7.3c-17.5,0-31.7,14.3-31.7,31.8s14.2,31.8,31.7,31.8c7.7,0,14.1-2.8,20.2-7.3v1.8v6.8h12.2v-24.1v-0.1v-14V90V62.4H615V71.1z M595,115.7c-11.1,0-20.2-9.1-20.2-20.2c0-11.1,9.1-20.2,20.2-20.2c11.1,0,20.2,9.1,20.2,20.2C615.2,106.7,606.1,115.7,595,115.7z"
            ></path>
            <path
              fill="white"
              d="M389.1,70.3v-7.9h-11.2v66.2h11.2V85.1c0-3.1,1.7-5.8,3.8-7.9c2.1-2.1,5.8-3.2,8.9-3.2c1.6,0,3.6,0.4,5.6,1.1V62.9c0-0.1-2.4-0.1-3.1-0.2C393.4,62.4,389.1,70.3,389.1,70.3z"
            ></path>
          </svg>
        </svg>
      </Link>
      <ul className="navbar-nav">{showNavLeft(menuList)}</ul>
    </nav>
  );
}

export default NavLeft;
