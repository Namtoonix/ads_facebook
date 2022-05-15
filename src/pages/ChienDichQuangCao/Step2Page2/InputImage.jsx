import React from "react";
import PropTypes from "prop-types";
import bg_input from "../../../assets/Icon-Facebook/bg_input.png";
import remove from "../../../assets/Icon-Facebook/remove.png";

InputImage.propTypes = {
  campaign: PropTypes.object.isRequired,
  handleAddImage: PropTypes.func.isRequired,
  handleRemoveImage: PropTypes.func.isRequired,
};

function InputImage(props) {
  const { campaign, handleAddImage, handleRemoveImage } = props;
  return (
    <>
      <label>Hình ảnh</label>
      <label
        className="input-image"
        style={
          campaign?.media?.image?.preview
            ? {}
            : { backgroundImage: `url(${bg_input})` }
        }
      >
        <input type="file" accept=".png,.jpg" onChange={handleAddImage} />
        <div style={campaign?.media?.image?.preview ? {} : { display: "none" }}>
          <img
            className="image-ads"
            src={campaign?.media?.image?.preview}
            alt=""
          />
          <button className="remove-image" onClick={handleRemoveImage}>
            <img src={remove} alt="" />
          </button>
        </div>
      </label>
    </>
  );
}

export default InputImage;
