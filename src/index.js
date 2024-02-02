import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import './style/App.scss';
import App from './components/App/App';
import { ContextComponent } from "./components/Contex/Context";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextComponent>
    <App />
  </ContextComponent>
);

