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
      <h3>M???u qu???ng c??o</h3>
      <p>
        Gi??p b???n truy???n t???i th??ng ??i???p qu???ng c??o m???t c??ch chi ti???t ?????n ng?????i xem
        v?? ?????ng th???i k??u g???i h??? th???c hi???n h??nh ?????ng th??ng qua ph???n hi???n th??? n???i
        dung qu???ng c??o c???a b???n.
      </p>
      <form id="form-example" onSubmit={() => handleSubmitForm()}>
        <label>N???i dung qu???ng c??o</label>
        <SelectInputFeild handleUseImage={handleUseImage} />
        {handleShowInputFeild(useImage)}
        <label htmlFor="main-content">N???i dung ch??nh</label>
        <p>Th??m t???i ??a 5 n???i dung ch??nh, gi???i h???n 125 k?? t???</p>
        <input
          type="text"
          onChange={(e) =>
            dispatch(createCampaign({ mainContent: e.target.value }))
          }
          name="main-content"
          id="main-content"
          value={state.mainContent}
          placeholder="Qu???ng c??o c???a b???n c?? n???i dung g?? v???y?"
          className={state.mainContent === "" ? "disabled" : ""}
        />
        <label htmlFor="title">Ti??u ?????</label>
        <p>Th??m t???i ??a 5 ti??u ?????</p>
        <input
          type="text"
          onChange={(e) => dispatch(createCampaign({ title: e.target.value }))}
          name="title"
          id="title"
          value={state.title}
          placeholder="Chat tr??n messenger"
          className={state.title === "" ? "disabled" : ""}
        />
        <label htmlFor="desc">
          M?? t??? - <span>kh??ng b???t bu???c</span>
        </label>
        <p>Th??m t???i ??a 5 m?? t???</p>
        <input
          type="text"
          onChange={(e) => dispatch(createCampaign({ desc: e.target.value }))}
          name="desc"
          id="desc"
          value={state.desc}
          placeholder="Qu???ng c??o c???a b???n c?? m?? t??? g?? kh??ng?"
        />
        <input
          type="submit"
          form="form-example"
          value="T???o qu???ng c??o"
          className={"submit-btn " + (isFullFill ? "" : "disabled")}
          disabled={isFullFill ? "" : "disabled"}
        />
      </form>
    </div>
  );
}

export default Step2Page2;
