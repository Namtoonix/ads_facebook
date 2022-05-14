import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onCheckStep } from "../../../feature/checkStep/checkStepSlice";
import "./step.scss";

Step.propTypes = {
  step: PropTypes.object.isRequired,
};

function Step(props) {
  const { step } = props;
  const stepIndex = useSelector((state) => state.checkStep)
  const dispatch = useDispatch();

  const handleChangeStep = (step) => {
    const actions = onCheckStep(step);
    dispatch(actions);
  };

  return (
    <div className={"step-item "+ (step.id === stepIndex ? "active" : "")}>
      <button onClick={() => handleChangeStep(step.id)}>{step.id}</button>
      <p>{step.content}</p>
    </div>
  );
}

export default Step;
