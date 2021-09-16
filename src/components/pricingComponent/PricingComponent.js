import React from 'react';
import PricingFooter from '../pricingFooter/PricingFooter';
import PricingCalculations from '../pricingCalculations/PricingCalculations.js'

import './pricing-component.css'

function PricingComponent() {

  return (
    <div className="pricing-component">
      <PricingCalculations></PricingCalculations>
      <PricingFooter></PricingFooter>
    </div>
  );
}

export default PricingComponent;
