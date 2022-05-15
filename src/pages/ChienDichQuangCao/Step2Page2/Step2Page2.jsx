import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { addDataToServer } from "../../../feature/campaignAds/campaignAdsSlice";
import InputImage from "./InputImage";
import InputVideo from "./InputVideo";
import "./step2Page2.scss";

Step2Page2.propTypes = {};

function Step2Page2(props) {
  const campaignAdsData = useSelector((state) => state.campaignAds);

  const [campaign, setCampaign] = useState(() => {
    return {
      media: campaignAdsData.media || {},
      mainContent: campaignAdsData.mainContent || "",
      title: campaignAdsData.title || "",
      desc: campaignAdsData.desc || "",
    };
  });
  const [isFullFill, setIsFullFill] = useState(false);

  const [isStepCompleted, setIsStepCompleted] = useState(false);

  const dispatch = useDispatch();

  const [useImage, setUseImage] = useState(true);

  const handleAddVideo = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setCampaign({
      ...campaign,
      media: {
        ...campaign.media,
        video: file,
      },
    });
  };
  const handleRemoveVideo = (e) => {
    e.preventDefault();
    setCampaign({
      ...campaign,
      media: {
        ...campaign.media,
        video: {},
      },
    });
  };
  const handleAddImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setCampaign({
      ...campaign,
      media: {
        ...campaign.media,
        image: file,
      },
    });
  };
  const handleRemoveImage = (e) => {
    e.preventDefault();
    setCampaign({
      ...campaign,
      media: {
        ...campaign.media,
        image: {},
      },
    });
  };
  const handleUseImage = (e) => {
    if (e === "image") {
      setUseImage(true);
      setCampaign({
        ...campaign,
        media: {
          ...campaign.media,
          video: {},
        },
      });
    } else {
      setUseImage(false);
      setCampaign({
        ...campaign,
        media: {
          ...campaign.media,
          image: {},
        },
      });
    }
  };
  const handleShowInputFeild = (useImage) => {
    if (useImage) {
      return (
        <InputImage
          campaign={campaign}
          handleAddImage={handleAddImage}
          handleRemoveImage={handleRemoveImage}
        />
      );
    } else {
      return (
        <InputVideo
          campaign={campaign}
          handleAddImage={handleAddImage}
          handleRemoveImage={handleRemoveImage}
          handleAddVideo={handleAddVideo}
          handleRemoveVideo={handleRemoveVideo}
        />
      );
    }
  };

  const handleCheckForm = () => {
    if (
      campaign?.media?.image?.preview !== "" &&
      campaign.mainContent !== "" &&
      campaign.title !== ""
    ) {
      setIsFullFill(true);
    }
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    await dispatch(addDataToServer(campaign)).unwrap();
    setIsStepCompleted(true);
  };

  if (isStepCompleted) {
    return <Navigate to="/quan-ly-quang-cao/tong-hop-quang-cao" />;
  }

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
        onSubmit={(e) => handleSubmitForm(e)}
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
        {handleShowInputFeild(useImage)}
        <label htmlFor="main-content">Nội dung chính</label>
        <p>Thêm tối đa 5 nội dung chính, giới hạn 125 ký tự</p>
        <input
          type="text"
          onChange={(e) =>
            setCampaign({
              ...campaign,
              mainContent: e.target.value,
            })
          }
          name="main-content"
          id="main-content"
          value={campaign.mainContent}
          placeholder="Quảng cáo của bạn có nội dung gì vậy?"
          className={campaign.mainContent === "" ? "disabled" : ""}
        />
        <label htmlFor="title">Tiêu đề</label>
        <p>Thêm tối đa 5 tiêu đề</p>
        <input
          type="text"
          onChange={(e) =>
            setCampaign({
              ...campaign,
              title: e.target.value,
            })
          }
          name="title"
          id="title"
          value={campaign.title}
          placeholder="Chat trên messenger"
          className={campaign.title === "" ? "disabled" : ""}
        />
        <label htmlFor="desc">
          Mô tả - <span>không bắt buộc</span>
        </label>
        <p>Thêm tối đa 5 mô tả</p>
        <input
          type="text"
          onChange={(e) =>
            setCampaign({
              ...campaign,
              desc: e.target.value,
            })
          }
          name="desc"
          id="desc"
          value={campaign.desc}
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
