import React, { useState } from "react";
import { useSelector } from "react-redux";
import Step1Page2 from "./Step1Page2/Step1Page2";
import Step2 from "./Step2";
import Step2Page2 from "./Step2Page2/Step2Page2";
import "./chiendichquancao.scss";

ChienDichQuangCao.propTypes = {};

function ChienDichQuangCao(props) {
  const { stepList } = props;
  const step = useSelector((state) => state.checkStep2);
  const stepCompleted = useSelector((state) => state.step2Completed);
  const [stepChild, setStepChild] = useState(0);

  const handleSetStepChild = (stepChild) => {
    setStepChild(stepChild);
  };

  const handleShowStep = (stepList) => {
    if (!stepList) return;
    return stepList.map((step, index) => (
      <Step2
        key={index}
        step={step}
        stepCompleted={stepCompleted}
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
      {handleShowContentStep(step)}
    </div>
  );
}

export default ChienDichQuangCao;
