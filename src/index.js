import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './redux/redux-store';
import AppWrapper from './AppWrapper';

const renderApp = () => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <AppWrapper/>
      </Provider>
    </HashRouter>,
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
