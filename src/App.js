import React from "react";
import { Provider } from "react-redux";
import { configStore } from "./state/configStore";
import { Landing } from "./components/Landing";

function App() {
  const myStore = configStore();
  return (
    <div>
    <Provider store={myStore}>
      <Landing />
    </Provider>
    </div>

  );
}

export default App;
