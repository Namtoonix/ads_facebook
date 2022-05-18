import PropTypes from "prop-types";
import React, { useReducer } from "react";
import check_icon from "../../../assets/Icon-Facebook/check.png";
import reducer, { initState } from "../feature/reducer";
import "./step.scss";

Step.propTypes = {
  step: PropTypes.object.isRequired,
  stepIndex: PropTypes.number.isRequired,
  handleChangeStep: PropTypes.func.isRequired,
};

function Step(props) {
  const { step, stepIndex, handleChangeStep } = props;
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

  return (
    <div
      className={
        "step-item " +
        (step.id === stepIndex ? "active " : " ") +
        handleFindCompleted(step.id, stepCompleted)
      }
    >
      <button onClick={() => handleChangeStep(step.id)}>
        {step.id}
        <img src={check_icon} alt="" />
      </button>
      <p>{step.content}</p>
    </div>
  );
}

export default Step;
