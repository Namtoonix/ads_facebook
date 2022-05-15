import React from "react";
import PropTypes from "prop-types";

SelectInputFeild.propTypes = {
  handleUseImage: PropTypes.func.isRequired,
};

function SelectInputFeild(props) {
  const { handleUseImage } = props;
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: 50 + "%" }}>
        <input
          type="radio"
          value="image"
          name="use-image"
          id="use-image"
          onChange={(e) => handleUseImage(e.target.value)}
          defaultChecked
        />
        <label htmlFor="use-image">
          Hình ảnh<br></br>
          <span
            style={{
              paddingLeft: 22 + "px",
              color: "#616161",
              fontWeight: 400,
            }}
          >
            Tối đa 01 hình ảnh
          </span>
        </label>
      </div>
      <div>
        <input
          type="radio"
          value="video"
          name="use-image"
          id="use-video"
          onChange={(e) => handleUseImage(e.target.value)}
        />
        <label htmlFor="use-video">
          Video<br></br>
          <span
            style={{
              paddingLeft: 22 + "px",
              color: "#616161",
              fontWeight: 400,
            }}
          >
            Tối đa 01 Video
          </span>
        </label>
      </div>
    </div>
  );
}

export default SelectInputFeild;
