import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux"
import rootReducer from "./redux/index.js"

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


test("render App", () => {
    const div = document.createElement("div");
    ReactDom.render(<Provider store={store}>
        <App />
    </Provider>, div);
})
