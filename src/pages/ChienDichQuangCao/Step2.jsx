import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onCheckStep2 } from "../../feature/checkStep/checkStep2Slice";
import check_icon from "../../assets/Icon-Facebook/check.png";

Step2.propTypes = {
  step: PropTypes.object.isRequired,
  stepCompleted: PropTypes.array.isRequired,
  stepChildIndex: PropTypes.number.isRequired,
};

function Step2(props) {
  const { step, stepCompleted, stepChildIndex } = props;
  const stepIndex = useSelector((state) => state.checkStep2);
  const dispatch = useDispatch();

  const handleChangeStep = (step) => {
    const actions = onCheckStep2(step);
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

  const handleShowStepChild = (step) => {
    if (!step.stepChild) return;
    return step.stepChild.map((stepchild, index) => (
      <li key={index} className={stepChildIndex === index ? "active" : ""}>
        {stepchild.content}
      </li>
    ));
  };

  return (
    <div
      className={
        "step-item " +
        (step.id === stepIndex ? "active " : " ") +
        handleFindCompleted(step.id, stepCompleted)
      }
    >
      <button id={`step2${step.id}`} onClick={() => handleChangeStep(step.id)}>
        {step.id}
        <img src={check_icon} alt="" />
      </button>
      <div className="step-content">
        <label htmlFor={`step2${step.id}`}>{step.content}</label>
        <ul>{handleShowStepChild(step)}</ul>
      </div>
    </div>
  );
}

export default Step2;
