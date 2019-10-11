import React from 'react';

import { steps } from './../steps';
import StepZilla  from 'react-stepzilla';

import './../wizard.css';

export default function Wizard() {
    return (
        <div className="step-progress">
            <StepZilla steps={steps} showSteps={true} showNavigation={true} />
        </div>
    );
}