import React from 'react';
import { AppContext } from "./AppContext.js";
import PricingComponent from './components/pricingComponent/PricingComponent.js'

import './App.css';

function App() {
  const appContext = React.useContext(AppContext);

  return (
    <div className="App">
      <PricingComponent></PricingComponent>
      <pre>{JSON.stringify(appContext.state, null, 2)}</pre>
    </div>
  );
}

export default App;
