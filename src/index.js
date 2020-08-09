import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import './index.css';
import store from './redux/redux-store';

const renderApp = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>,
    document.getElementById('root')
  )
}

window.store = store;
renderApp();
store.subscribe(renderApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
