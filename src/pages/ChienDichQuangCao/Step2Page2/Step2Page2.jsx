import React, { useEffect, useReducer, useState } from "react";
import { createCampaign, addCampaign } from "../feature/action";
import reducer, { initState } from "../feature/reducer";
import InputImage from "./InputImage";
import InputVideo from "./InputVideo";
import SelectInputFeild from "./SelectInputFeild";
import "./step2Page2.scss";

Step2Page2.propTypes = {};

function Step2Page2(props) {
  const [state, dispatch] = useReducer(reducer, initState);
  const [useImage, setUseImage] = useState(true);
  const [isFullFill, setIsFullFill] = useState(false);

  const handleAddVideo = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    dispatch(
      createCampaign({
        media: {
          ...state.media,
          video: file,
        },
      })
    );
  };
  const handleRemoveVideo = (e) => {
    e.preventDefault();
    dispatch(
      createCampaign({
        media: {
          ...state.media,
          video: {},
        },
      })
    );
  };
  const handleAddImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    dispatch(
      createCampaign({
        media: {
          ...state.media,
          image: file,
        },
      })
    );
  };
  const handleRemoveImage = (e) => {
    e.preventDefault();
    dispatch(
      createCampaign({
        media: {
          ...state.media,
          image: {},
        },
      })
    );
  };
  const handleUseImage = (e) => {
    if (e === "image") {
      setUseImage(true);
      handleRemoveVideo();
    } else {
      setUseImage(false);
      handleRemoveImage();
    }
  };
  const handleShowInputFeild = (useImage) => {
    if (useImage) {
      return (
        <InputImage
          campaign={state}
          handleAddImage={handleAddImage}
          handleRemoveImage={handleRemoveImage}
        />
      );
    } else {
      return (
        <InputVideo
          campaign={state}
          handleAddImage={handleAddImage}
          handleRemoveImage={handleRemoveImage}
          handleAddVideo={handleAddVideo}
          handleRemoveVideo={handleRemoveVideo}
        />
      );
    }
  };
  useEffect(() => {
    if (
      state?.media?.image?.preview !== "" &&
      state.mainContent !== "" &&
      state.title !== ""
    ) {
      setIsFullFill(true);
    }
  }, [state]);

  const handleSubmitForm = () => {
    dispatch(createCampaign({ step: 1 }));
    dispatch(createCampaign({ stepCompleted: [...state.stepCompleted, 2] }));
    dispatch(addCampaign(state));
  };

  return (
    <div className="page2-content">
      <h3>Mẫu quảng cáo</h3>
      <p>
        Giúp bạn truyền tải thông điệp quảng cáo một cách chi tiết đến người xem
        và đồng thời kêu gọi họ thực hiện hành động thông qua phần hiển thị nội
        dung quảng cáo của bạn.
      </p>
      <form id="form-example" onSubmit={() => handleSubmitForm()}>
        <label>Nội dung quảng cáo</label>
        <SelectInputFeild handleUseImage={handleUseImage} />
        {handleShowInputFeild(useImage)}
        <label htmlFor="main-content">Nội dung chính</label>
        <p>Thêm tối đa 5 nội dung chính, giới hạn 125 ký tự</p>
        <input
          type="text"
          onChange={(e) =>
            dispatch(createCampaign({ mainContent: e.target.value }))
          }
          name="main-content"
          id="main-content"
          value={state.mainContent}
          placeholder="Quảng cáo của bạn có nội dung gì vậy?"
          className={state.mainContent === "" ? "disabled" : ""}
        />
        <label htmlFor="title">Tiêu đề</label>
        <p>Thêm tối đa 5 tiêu đề</p>
        <input
          type="text"
          onChange={(e) => dispatch(createCampaign({ title: e.target.value }))}
          name="title"
          id="title"
          value={state.title}
          placeholder="Chat trên messenger"
          className={state.title === "" ? "disabled" : ""}
        />
        <label htmlFor="desc">
          Mô tả - <span>không bắt buộc</span>
        </label>
        <p>Thêm tối đa 5 mô tả</p>
        <input
          type="text"
          onChange={(e) => dispatch(createCampaign({ desc: e.target.value }))}
          name="desc"
          id="desc"
          value={state.desc}
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
