import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={state} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export default renderEntireTree


