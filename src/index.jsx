import React from "react";
import "./index.css";
import { createStore } from "redux";
import { app } from "./reducers";

const store = createStore(app);
render(
    <Provider store={store}>
      <GameContainer />
    </Provider>,
    document.getElementById("root")
);