import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import Step1Page from "./Page1/Step1Page";
import Step2Page from "./Page2/Step2Page";
import Step3Page from "./Page3/Step3Page";
import Step from "./Step/Step";

CreateAccout.propTypes = {
  stepList: PropTypes.array.isRequired,
};

function CreateAccout(props) {
  const { stepList } = props;
  const step = useSelector((state) => state.checkStep);
  const stepCompleted = useSelector((state) => state.stepCompleted);

  const handleShowStep = (stepList) => {
    if (!stepList) return;
    return stepList.map((step, index) => <Step key={index} step={step} stepCompleted={stepCompleted}/>);
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
      {handleShowContentStep(step)}
    </div>
  );
}

export default CreateAccout;
