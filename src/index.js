import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import postData from './Data/PostListData/postlistData';
import dialogsData from './Data/DialogsData/dialogsData';
import messagesData from './Data/MessagesData/messagesData';

const dialogs = {
  dialogs: dialogsData,
  messages: messagesData,
}

ReactDOM.render(
  <React.StrictMode>
    <App
      postsData={postData}
      dialogsData={dialogs}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
