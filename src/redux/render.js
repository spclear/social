import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import { addPost, updateCurrPostInput } from './state';

export const renderApp = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updInput={updateCurrPostInput}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}