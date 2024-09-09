import React from 'react';
import ReactDOM from 'react-dom/client';

// importing the react component
import App from './App';

/*

ReactDOM : 
- Js ibrary provided by React, acts as an interface b/w React & DOM. 
- Provides methods that help to render React components into DOM. 
- ReactDOM helps take your React components and put them onto the webpage.

ReactDOM.createRoot(container): 
- This sets up a place (root) where your React app will live on the webpage.



*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
  