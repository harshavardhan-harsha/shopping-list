import React from "react";
import Items from "./components/Items";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Items />
      </div>
    </Provider>
  );
};

export default App;
