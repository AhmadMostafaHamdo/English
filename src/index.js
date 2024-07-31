import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './all.min.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import './i18n';
import App from './App';
import './index.css';
import './quiz.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <div className='container'>
      <App/>
    </div>
  </React.StrictMode>
  </BrowserRouter>
);
reportWebVitals();
