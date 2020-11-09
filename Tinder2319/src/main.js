import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from "react-redux";
import store from "../src/core/store/index";
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
);

