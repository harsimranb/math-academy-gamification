import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

// Render App inside Browser Router HOC to enable routing capabilities
ReactDOM.render(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('rootContainer')
);
