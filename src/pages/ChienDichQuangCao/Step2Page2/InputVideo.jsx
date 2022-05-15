import React from "react";
import PropTypes from "prop-types";
import bg_input from "../../../assets/Icon-Facebook/bg_input.png";
import bg_input_video from "../../../assets/Icon-Facebook/bg_input_video.png";
import remove from "../../../assets/Icon-Facebook/remove.png";

InputVideo.propTypes = {
  campaign: PropTypes.object.isRequired,
  handleAddImage: PropTypes.func.isRequired,
  handleRemoveImage: PropTypes.func.isRequired,
  handleAddVideo: PropTypes.func.isRequired,
  handleRemoveVideo: PropTypes.func.isRequired,
};
function InputVideo(props) {
  const {
    campaign,
    handleAddImage,
    handleRemoveImage,
    handleAddVideo,
    handleRemoveVideo,
  } = props;
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: 50 + "%",
          display: "flex",
          flexDirection: "column",
          paddingRight: 8 + "px",
        }}
      >
        <label>Video</label>
        <label
          className="input-video"
          style={
            campaign?.media?.video?.preview
              ? {}
              : { backgroundImage: `url(${bg_input_video})` }
          }
        >
          <input type="file" onChange={handleAddVideo} />
          <div
            style={campaign?.media?.video?.preview ? {} : { display: "none" }}
          >
            <video
              className="video-ads"
              src={campaign?.media?.video?.preview}
              height="150"
              controls
            ></video>
            <button className="remove-video" onClick={handleRemoveVideo}>
              <img src={remove} alt="" />
            </button>
          </div>
        </label>
      </div>
      <div
        style={{
          width: 50 + "%",
          display: "flex",
          flexDirection: "column",
          paddingLeft: 8 + "px",
        }}
      >
        <label>Ảnh bìa của video</label>
        <label
          className="input-image"
          style={
            campaign?.media?.image?.preview
              ? {}
              : { backgroundImage: `url(${bg_input})` }
          }
        >
          <input type="file" accept=".png,.jpg" onChange={handleAddImage} />
          <div
            style={campaign?.media?.image?.preview ? {} : { display: "none" }}
          >
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
      </div>
    </div>
  );
}

export default InputVideo;
