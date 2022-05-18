import PropTypes from "prop-types";
import React, { useReducer, useState } from "react";
import "./chiendichquancao.scss";
import reducer, { initState } from "./feature/reducer";
import Step1Page2 from "./Step1Page2/Step1Page2";
import Step2 from "./Step2";
import Step2Page2 from "./Step2Page2/Step2Page2";

ChienDichQuangCao.propTypes = {
  stepList: PropTypes.array.isRequired,
};

function ChienDichQuangCao(props) {
  const { stepList } = props;
  const [state] = useReducer(reducer, initState);
  const [stepIndex, setStepIndex] = useState(state.step ? state.step : 1);
  const [stepChild, setStepChild] = useState(0);

  const handleSetStepChild = (stepChild) => {
    setStepChild(stepChild);
  };

  const handleChangeStep = (step) => {
    setStepIndex(step);
  };

  const handleShowStep = (stepList) => {
    if (!stepList) return;
    return stepList.map((step, index) => (
      <Step2
        key={index}
        step={step}
        stepIndex={stepIndex}
        handleChangeStep={handleChangeStep}
        stepChildIndex={stepChild}
      />
    ));
  };
  const handleShowContentStep = (step) => {
    if (step === 1) {
      return <Step1Page2 handleSetStepChild={handleSetStepChild} />;
    } else {
      return <Step2Page2 />;
    }
  };

  return (
    <div className="campaign-ads">
      <ul className="step2-container">{handleShowStep(stepList)}</ul>
      {handleShowContentStep(stepIndex)}
    </div>
  );
}

export default ChienDichQuangCao;
