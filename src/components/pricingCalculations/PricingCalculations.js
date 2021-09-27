import React from 'react';
import { AppContext } from "../../AppContext.js";
import Slider from '../inputs/Slider.js';
import ToggleSwitch from '../inputs/ToggleSwitch.js';

import './pricing-calculations.css'

function PricingCalculations() {
  const appContext = React.useContext(AppContext);
  var pageViewsCount = calculatePageViewsCount();
  var billingFrequency = appContext.state.billingFrequency == 'yearly' ? true : false;
  var frequencyLabel =  appContext.state.billingFrequency == 'yearly' ? 'year' : 'month';
  var sliderRange = appContext.state.billingFrequency == 'yearly' ? 1200 : 100;
  var sliderStep = appContext.state.billingFrequency == 'yearly' ? 100 : 1;

  function calculatePageViewsCount() {
    return (appContext.state.userAmountInput * 3.5);
  }

  function onSliderChange(event){
    appContext.actions.setUserAmountInput(event.target.value);
  }

  function onBillingFrequencyChange() {
    var newFrequency = appContext.state.billingFrequency == 'yearly' ? 'monthly' : 'yearly'
    var newSliderValue =  appContext.state.billingFrequency == 'yearly' ? 50 : 600;
    appContext.actions.setBillingFrequency(newFrequency);
    appContext.actions.setUserAmountInput(newSliderValue);
  }

  return (
    <div className="pricing-calculations">
      <div className="pricing-calculations__output">
        <p className="pricing-calculations__output--pageviews label-text">{pageViewsCount}K PAGEVIEWS</p>
        <p className="pricing-calculations__output--price">
          <span className="amount">R{appContext.state.userAmountInput}</span>
          <span className="amount-label label-text">/per {frequencyLabel}</span>
        </p>
      </div>

      <div className="pricing-calculations__input">
        <div className="pricing-calculations__input--price-slider">
          <Slider minRange={0}
                  maxRange={sliderRange}
                  sliderStep={sliderStep}
                  userValue={appContext.state.userAmountInput}
                  onSliderChangeFunction={onSliderChange}>
          </Slider>
        </div>
        <div className="pricing-calculations__input--billing">
          <p>Monthly billing</p>
          <ToggleSwitch onCheckboxChange={onBillingFrequencyChange} switchValue={billingFrequency}></ToggleSwitch>
          <p>Yearly billing</p>
        </div>
      </div>
    </div>
  );
}

export default PricingCalculations;
