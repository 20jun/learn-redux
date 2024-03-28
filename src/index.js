import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";
import {
  composeWithDevTools,
  devToolsEnhancer,
} from "@redux-devtools/extension"; // 리덕스 개발자 도구

const store = createStore(rootReducer, devToolsEnhancer()); // 스토어를 만듭니다.

/* 
const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   */

const root = ReactDOM.createRoot(document.getElementById("root"));
// composeWithDevTools 를 사용하여 리덕스 개발자 도구 활성화

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
