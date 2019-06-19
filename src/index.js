import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss'
import App from './App';

import { createStore } from "redux";
import { Provider } from "react-redux"
import rootReducer from "./redux/index.js"

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'));
