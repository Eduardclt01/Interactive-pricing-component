import React from 'react';
import Slider from '../inputs/Slider.js';
import ToggleSwitch from '../inputs/ToggleSwitch.js';

import './pricing-calculations.css'

function PricingCalculations() {

  return (
    <div className="pricing-calculations">
      <div className="pricing-calculations__output">
        <p className="pricing-calculations__output--pageviews label-text">xxxK PAGEVIEWS</p>
        <p className="pricing-calculations__output--price"><span className="amount">R100.00</span><span className="amount-label label-text">/per month</span></p>
      </div>

      <div className="pricing-calculations__input">
        <div className="pricing-calculations__input--price-slider">
          <Slider></Slider>
        </div>
        <div className="pricing-calculations__input--billing">
          <p>Monthly billing</p>
          <ToggleSwitch></ToggleSwitch>
          <p>Yearly billing</p>
        </div>
      </div>
    </div>
  );
}

export default PricingCalculations;
