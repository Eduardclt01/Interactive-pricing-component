import React from "react";

export const AppContext = React.createContext(null);

export const AppContextWrapper = (props) => {
  const [state, setState] = React.useState({
    userAmountInput: 50,
  });

  function setUserAmountInput(amount) {
    setState(function(state) {
      return {
        ...state,
        userAmountInput: amount
      };
    });
  };


  const [actions, setAppActions] = React.useState({
    setUserAmountInput: setUserAmountInput
  });

  return (
    <AppContext.Provider value={{ state, actions }}>
      {props.children}
    </AppContext.Provider>
  );
};
