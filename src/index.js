import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'
import estanterias from './estanterias'
import {createStore} from 'redux'
import {provider, Provider} from 'react-redux'

// Notmalmente se llamará store, no tienda

const tienda = createStore(estanterias)

ReactDOM.render(
    <Provider store={tienda}>
        <App />
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
