import "./styles.css";

import ContextProvider, { SomeContext } from "./Context";
import { useContext } from "react";

export default function App() {
  return (
    <ContextProvider>
      <Child />
    </ContextProvider>
  );
}

const Child = () => {
  const context = useContext(SomeContext);
  console.log(context);

  return (
    <>
      <h1>Counter: {context.counter}</h1>
      <button onClick={context.updateCounter}>Click</button>
    </>
  );
};
