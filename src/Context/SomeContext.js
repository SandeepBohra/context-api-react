import React, { createContext, useState } from "react";

export const SomeContext = createContext();

const ContextProvider = (props) => {
  const [counter, setCounter] = useState(1);

  const updateCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <SomeContext.Provider value={{ counter, updateCounter }}>
      {props.children}
    </SomeContext.Provider>
  );
};

export default ContextProvider;
