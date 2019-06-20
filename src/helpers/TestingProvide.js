
import React from "react"
import { createStore } from "redux";
import { Provider } from "react-redux"
import rootReducer from "../redux/index.js"


const store = createStore(rootReducer);


const TestingProvider = (props) =>{
    return <Provider store={store}>
        {props.children}
    </Provider>
}

export default TestingProvider