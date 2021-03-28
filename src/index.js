import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redax/State';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}


rerenderEntireTree();
store.subscribe(rerenderEntireTree);
