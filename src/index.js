import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { addMessage, addPost, updateTextMessage, updateTextPost, subscribe } from './Redax/State';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}
        addPost={addPost}
        updateTextPost={updateTextPost}
        addMessage={addMessage}
        updateTextMessage={updateTextMessage} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree();
subscribe(rerenderEntireTree);
