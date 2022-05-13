import React from "react";
import icon_noity from "../assets/Icon-Facebook/icon_noity.png";
import icon_search from "../assets/Icon-Facebook/icon_search.png";
import avatar from "../assets/Icon-Facebook/avatar.png";
import icon_app from "../assets/Icon-Facebook/icon_app.png";
import firebase from "firebase/compat/app";

function ActionRight(props) {
  const handleLogoutFb = () => {
    firebase.auth().signOut();
  }

  return (
    <div className="topbar-right">
      <div className="action">
        <div className="noity">
          <img src={icon_noity} alt="" />
          <span className="dot"></span>
        </div>
        <div className="search">
          <img src={icon_search} alt="" />
        </div>
      </div>
      <div className="account">
          <p className="account-name">Haravan Corp.</p>
          <button onClick={handleLogoutFb}><img className="account-avatar" src={avatar} alt="" /><span>Đăng xuất</span></button>
          <img className="account-app" src={icon_app} alt="" />
      </div>
    </div>
  );
}

export default ActionRight;
