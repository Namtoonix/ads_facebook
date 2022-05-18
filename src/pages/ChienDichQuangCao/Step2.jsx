import PropTypes from "prop-types";
import React, { useReducer } from "react";
import check_icon from "../../assets/Icon-Facebook/check.png";
import reducer, { initState } from "./feature/reducer";

Step2.propTypes = {
  step: PropTypes.object.isRequired,
  stepIndex: PropTypes.number.isRequired,
  handleChangeStep: PropTypes.func.isRequired,
};

function Step2(props) {
  const { step, stepIndex, handleChangeStep, stepChildIndex } = props;
  const [state] = useReducer(reducer, initState);
  const stepCompleted = state.stepCompleted;

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
