import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-routes";
import MenuItem from "./MenuItem";

NavLeft.propTypes = {
  menuList: PropTypes.array.isRequired,
};

function NavLeft(props) {
  const { menuList } = props;

  const showNavLeft = (menuList) => {
    if (!menuList) return;
    return menuList.map((menu, index) => <MenuItem key={index} menu={menu} />);
  };

  return (
    <nav>
      <div className="navbar-center">
        <Link to="/" className="navbar-brand">
          <img
            alt=""
            src="https://cdn.tgdd.vn/Files/2011/06/10/40705/lo-go-dienmayxanh.png"
            style={{ width: 140 + "px" }}
          />
        </Link>
        <ul className="navbar-nav">
          {showNavLeft(menuList)}
         
        </ul>
      </div>
    </nav>
  );
}

export default NavLeft;
