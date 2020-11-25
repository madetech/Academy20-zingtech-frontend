import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";


// import { Auth0Client } from '@auth0/auth0-spa-js';

// const auth0 = new Auth0Client({
//   domain= "dev-agqzfv5q.eu.auth0.com",
//   client_id= "sMaF7g9DJ5riJekb4GOzsIrs3A6FPvAA",
//   redirect_uri= {window.location.origin + "/home"}
// });

// //if you do this, you'll need to check the session yourself
// try {
//   await getTokenSilently();
// } catch (error) {
//   if (error.error !== 'login_required') {
//     throw error;
//   }
// }

ReactDOM.render(
  <Auth0Provider
  domain="dev-agqzfv5q.eu.auth0.com"
  clientId="sMaF7g9DJ5riJekb4GOzsIrs3A6FPvAA"
  redirectUri={window.location.origin + "/home"}
  audience="https://zingtech-backend.herokuapp.com"
>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
</Auth0Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
