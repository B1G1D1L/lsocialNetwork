import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const posts = [
  {id: 1, message: 'как дела'},
  {id: 2, message: 'Я русский'},
];

const dialogData = [
  { id: 1, name: 'Ilya' },
  { id: 2, name: 'Vasily' },
  { id: 3, name: 'Yura' },
  { id: 4, name: 'Nataly' },
];

const messageData = [
  {id: 1, message: 'Hello world'},
  {id: 2, message: 'Жопа полная'},
];


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogData={dialogData} messageData={messageData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
