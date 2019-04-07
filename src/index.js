import React from 'react';
import * as ReactDOM from "react-dom";
import App from './components/App';
import {Provider} from 'react-redux';

import './styles/index.css';
import store from './store';

const ROOT_ELEMENT = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, ROOT_ELEMENT
);

