import React from "react";
import bg_404 from "../../assets/Icon-Facebook/404.jpg";

function NotFoundPage(props) {
  return (
    <div
      style={{
        marginTop: 60 + "px",
      }}
    >
      <img style={{width: 100 + "%"}} src={bg_404} alt="" />
    </div>
  );
}

export default NotFoundPage;
