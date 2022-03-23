import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/app';
import './app/styles/global.css';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
