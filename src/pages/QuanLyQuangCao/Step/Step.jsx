import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onCheckStep } from "../../../feature/checkStep/checkStepSlice";
import check_icon from "../../../assets/Icon-Facebook/check.png"
import "./step.scss";

Step.propTypes = {
  step: PropTypes.object.isRequired,
  stepCompleted: PropTypes.array.isRequired,
};

function Step(props) {
  const { step, stepCompleted } = props;
  const stepIndex = useSelector((state) => state.checkStep);
  const dispatch = useDispatch();

  const handleChangeStep = (step) => {
    const actions = onCheckStep(step);
    dispatch(actions);
  };

  const handleFindCompleted = (item, arr) => {
    var classPlus = "";
    arr.forEach((element) => {
      if (item === element) {
        classPlus = "completed";
      }
    });
    return classPlus;
  };

  return (
    <div
      className={
        "step-item " +
        (step.id === stepIndex ? "active " : " ") +
        (handleFindCompleted(step.id, stepCompleted))
      }
    >
      <button onClick={() => handleChangeStep(step.id)}>{step.id}<img src={check_icon} alt="" /></button>
      <p>{step.content}</p>
    </div>
  );
}

export default Step;
