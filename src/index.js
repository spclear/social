import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import state from './redux/state';
import { subscribe, addPost, updateCurrPostInput } from './redux/state';
import './index.css';


const renderApp = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updInput={updateCurrPostInput}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

renderApp();

subscribe(renderApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
