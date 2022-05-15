import React from "react";
import bg_404 from "../../assets/Icon-Facebook/404_2.png";

function NotFoundPage(props) {
  return (
    <div
      style={{
        marginTop: 60 + "px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <img style={{width: 50 + "%", margin: "auto"}} src={bg_404} alt="" />
    </div>
  );
}

export default NotFoundPage;
