import React, { useEffect, useState } from "react";
import "./step2Page2.scss";
import bg_input from "../../../assets/Icon-Facebook/bg_input.png";
import bg_input_video from "../../../assets/Icon-Facebook/bg_input_video.png";
import remove from "../../../assets/Icon-Facebook/remove.png";
import { useDispatch, useSelector } from "react-redux";
import {
  campaignAds,
  addCampaignToServer,
} from "../../../feature/campaignAds/campaignAdsSlice";
import { onStep2Completed } from "../../../feature/checkStep/step2CompletedSlice";

Step2Page2.propTypes = {};

function Step2Page2(props) {
  const campaignAdsData = useSelector((state) => state.campaignAds);

  const [image, setImage] = useState(() =>
    campaignAdsData.media ? campaignAdsData.media : {}
  );
  const [video, setVideo] = useState(() =>
    campaignAdsData.media ? campaignAdsData.media : {}
  );
  const [mainContent, setMaincontent] = useState(() =>
    campaignAdsData.mainContent ? campaignAdsData.mainContent : ""
  );
  const [title, setTitle] = useState(() =>
    campaignAdsData.title ? campaignAdsData.title : ""
  );
  const [desc, setDesc] = useState(() =>
    campaignAdsData.desc ? campaignAdsData.desc : ""
  );
  const [isFullFill, setIsFullFill] = useState(false);

  const stepCompleted = useSelector((state) => state.step2Completed);
  const dispatch = useDispatch();

  const [useImage, setUseImage] = useState(true);

  const handleAddVideo = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setVideo(file);
  };
  const handleRemoveVideo = (e) => {
    e.preventDefault();
    setVideo({});
  };
  const handleAddImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImage(file);
  };
  const handleRemoveImage = (e) => {
    e.preventDefault();
    setImage({});
  };
  const handleUseImage = (e) => {
    if (e === "image") {
      setUseImage(true);
      setVideo({});
    } else {
      setUseImage(false);
      setImage({});
    }
  };
  const handleShowInputFeild = (useImage) => {
    if (useImage) {
      return (
        <>
          <label>Hình ảnh</label>
          <label
            className="input-image"
            style={image.preview ? {} : { backgroundImage: `url(${bg_input})` }}
          >
            <input type="file" accept=".png,.jpg" onChange={handleAddImage} />
            <div style={image.preview ? {} : { display: "none" }}>
              <img className="image-ads" src={image.preview} alt="" />
              <button className="remove-image" onClick={handleRemoveImage}>
                <img src={remove} alt="" />
              </button>
            </div>
          </label>
        </>
      );
    } else {
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
                video.preview
                  ? {}
                  : { backgroundImage: `url(${bg_input_video})` }
              }
            >
              <input type="file" onChange={handleAddVideo} />
              <div style={video.preview ? {} : { display: "none" }}>
                <video
                  className="video-ads"
                  src={video.preview}
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
                image.preview ? {} : { backgroundImage: `url(${bg_input})` }
              }
            >
              <input type="file" accept=".png,.jpg" onChange={handleAddImage} />
              <div style={image.preview ? {} : { display: "none" }}>
                <img className="image-ads" src={image.preview} alt="" />
                <button className="remove-image" onClick={handleRemoveImage}>
                  <img src={remove} alt="" />
                </button>
              </div>
            </label>
          </div>
        </div>
      );
    }
  };

  const handleCheckForm = () => {
    if (image.preview !== "" && mainContent !== "" && title !== "") {
      setIsFullFill(true);
    }
  };
  const handleSubmitForm = () => {
    const media = {
      image,
      video,
    };
    const data = {
      ...campaignAdsData,
      media,
      mainContent,
      title,
      desc,
    };

    const actions3 = onStep2Completed([]);
    const actions4 = addCampaignToServer(data)
    dispatch(actions3);
    dispatch(actions4);
  };

  return (
    <div className="page2-content">
      <h3>Mẫu quảng cáo</h3>
      <p>
        Giúp bạn truyền tải thông điệp quảng cáo một cách chi tiết đến người xem
        và đồng thời kêu gọi họ thực hiện hành động thông qua phần hiển thị nội
        dung quảng cáo của bạn.
      </p>
      <form
        id="form-example"
        onSubmit={() => handleSubmitForm()}
        onChange={() => handleCheckForm()}
      >
        <label>Nội dung quảng cáo</label>
        <div style={{ display: "flex" }}>
          <div style={{ width: 50 + "%" }}>
            <input
              type="radio"
              value="image"
              name="use-image"
              id="use-image"
              onChange={(e) => handleUseImage(e.target.value)}
              defaultChecked={useImage}
            />
            <label htmlFor="use-image">
              Hình ảnh<br></br>
              <span
                style={{
                  paddingLeft: 21 + "px",
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
                  paddingLeft: 21 + "px",
                  color: "#616161",
                  fontWeight: 400,
                }}
              >
                Tối đa 01 Video
              </span>
            </label>
          </div>
        </div>
        {handleShowInputFeild(useImage)}
        <label htmlFor="main-content">Nội dung chính</label>
        <p>Thêm tối đa 5 nội dung chính, giới hạn 125 ký tự</p>
        <input
          type="text"
          onChange={(e) => setMaincontent(e.target.value)}
          name="main-content"
          id="main-content"
          value={mainContent}
          placeholder="Quảng cáo của bạn có nội dung gì vậy?"
          className={mainContent === "" ? "disabled" : ""}
        />
        <label htmlFor="title">Tiêu đề</label>
        <p>Thêm tối đa 5 tiêu đề</p>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          id="title"
          value={title}
          placeholder="Chat trên messenger"
          className={title === "" ? "disabled" : ""}
        />
        <label htmlFor="desc">
          Mô tả - <span>không bắt buộc</span>
        </label>
        <p>Thêm tối đa 5 mô tả</p>
        <input
          type="text"
          onChange={(e) => setDesc(e.target.value)}
          name="desc"
          id="desc"
          value={desc}
          placeholder="Quảng cáo của bạn có mô tả gì không?"
        />
        <input
          type="submit"
          form="form-example"
          value="Tạo quảng cáo"
          className={"submit-btn " + (isFullFill ? "" : "disabled")}
          disabled={isFullFill ? "" : "disabled"}
        />
      </form>
    </div>
  );
}

export default Step2Page2;
