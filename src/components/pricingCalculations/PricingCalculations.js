import React from 'react';
import { AppContext } from "../../AppContext.js";
import Slider from '../inputs/Slider.js';
import ToggleSwitch from '../inputs/ToggleSwitch.js';

import './pricing-calculations.css'

function PricingCalculations() {
  const appContext = React.useContext(AppContext);
  var pageViewsCount = calculatePageViewsCount();

  function onSliderChange(event){
    appContext.actions.setUserAmountInput(event.target.value);
  }

  function calculatePageViewsCount() {
    return (appContext.state.userAmountInput * 3.5);
  }

  return (
    <div className="pricing-calculations">
      <div className="pricing-calculations__output">
        <p className="pricing-calculations__output--pageviews label-text">{pageViewsCount}K PAGEVIEWS</p>
        <p className="pricing-calculations__output--price"><span className="amount">R{appContext.state.userAmountInput}</span><span className="amount-label label-text">/per month</span></p>
      </div>

      <div className="pricing-calculations__input">
        <div className="pricing-calculations__input--price-slider">
          <Slider minRange={1} maxRange={100} userValue={appContext.state.userAmountInput} onSliderChangeFunction={onSliderChange}></Slider>
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
