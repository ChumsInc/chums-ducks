import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'

import reducer from '../src/ducks';
import {Provider} from "react-redux";
import PaginationTest from "./PaginationTest";

const composeEnhancers = composeWithDevTools({});
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PaginationTest />
        </Provider>
    </React.StrictMode>,
    document.getElementById('app')
);
