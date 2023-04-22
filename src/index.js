import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./App";
import modeReducer from "./features/mode";
import settingsReducer from "./features/settings";
import fontReducer from "./features/font";
import colorReducer from "./features/color";
import countersReducer from "./features/counters";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: {
    mode: modeReducer,
    settings: settingsReducer,
    font: fontReducer,
    color: colorReducer,
    counters: countersReducer,
  },
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
