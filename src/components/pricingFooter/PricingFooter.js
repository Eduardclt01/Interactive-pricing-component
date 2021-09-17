import React from 'react';
import Button from '../button/Button';

import './pricing-footer.css'

function PricingFooter() {

  return (
    <div className="pricing-footer">
      <div className='pricing-footer__features'>
        <ul className='pricing-footer__features--list'>
          <li><span className='check-mark'>✓</span> Unlimited websites</li>
          <li><span className='check-mark'>✓</span> 100% data ownership</li>
          <li><span className='check-mark'>✓</span> Email reports</li>
        </ul>
      </div>

      <div className='pricing-footer__button'>
        <Button buttonText="Start My Trial"></Button>
      </div>
    </div>
  );
}

export default PricingFooter;
