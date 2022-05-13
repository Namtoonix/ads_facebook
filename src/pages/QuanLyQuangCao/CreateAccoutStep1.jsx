import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Step from './Step';

CreateAccoutStep1.propTypes = {
    
};

function CreateAccoutStep1(props) {
    const [step, setStep] = useState(() => {
        var urlStep = window.location.pathname;
        if (urlStep.indexOf('step-1') > -1) {
            return 1;
        } else if (urlStep.indexOf('step-2') > -1) {
            return 2;
        } else {
            return 3;
        }
    });

    console.log(step);

    return (
        <div>
            <Step step={step} />
        </div>
    );
}

export default CreateAccoutStep1;