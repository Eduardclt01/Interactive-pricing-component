import React from "react";

export const AppContext = React.createContext(null);

export const AppContextWrapper = (props) => {
  const [state, setState] = React.useState({
    userAmountInput: 50,
    billingFrequency: 'monthly'
  });

  function setBillingFrequency(frequency) {
    setState(function(state) {
      return {
        ...state,
        billingFrequency: frequency
      };
    });
  };

  function setUserAmountInput(amount) {
    setState(function(state) {
      return {
        ...state,
        userAmountInput: amount
      };
    });
  };

  const [actions, setAppActions] = React.useState({
    setUserAmountInput: setUserAmountInput,
    setBillingFrequency: setBillingFrequency
  });

  return (
    <AppContext.Provider value={{ state, actions }}>
      {props.children}
    </AppContext.Provider>
  );
};
