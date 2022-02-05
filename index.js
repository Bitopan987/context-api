import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/style.css';
import { UserContext } from './UserContext';

let userInfo = {
  name: 'Bitopan Deka',
  username: 'Bitopan',
  avatar:
    'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
};

console.log(UserContext);

ReactDOM.render(
  <UserContext.Provider value={userInfo}>
    <App />
  </UserContext.Provider>,
  document.getElementById('root')
);
