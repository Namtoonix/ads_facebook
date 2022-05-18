import PropTypes from "prop-types";
import React, { useReducer, useState } from "react";
import Step1Page from "./Page1/Step1Page";
import Step2Page from "./Page2/Step2Page";
import Step3Page from "./Page3/Step3Page";
import reducer, { initState } from "./feature/reducer";
import Step from "./Step/Step";

CreateAccout.propTypes = {
  stepList: PropTypes.array.isRequired,
};

function CreateAccout(props) {
  const { stepList } = props;
  const [state] = useReducer(reducer, initState);
  const [stepIndex, setStepIndex] = useState(state.step ? state.step : 1);

  const handleChangeStep = (step) => {
    setStepIndex(step);
  };

  const handleShowStep = (stepList) => {
    if (!stepList) return;
    return stepList.map((step, index) => (
      <Step
        key={index}
        step={step}
        stepIndex={stepIndex}
        handleChangeStep={handleChangeStep}
        stepCompleted={state.stepCompleted}
      />
    ));
  };

  const handleShowContentStep = (step) => {
    if (step === 1) {
      return <Step1Page />;
    } else if (step === 2) {
      return <Step2Page />;
    } else {
      return <Step3Page />;
    }
  };

  return (
    <div>
      <ul className="step-container">{handleShowStep(stepList)}</ul>
      {handleShowContentStep(stepIndex)}
    </div>
  );
}

export default CreateAccout;
