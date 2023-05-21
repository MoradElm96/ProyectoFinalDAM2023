import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);
//cambiar asi para la la pwa, para que cargue offline y mucho mas rapido, si se rompe el servidor guarda las paginas en memoria cache
//serviceWorker.register();       
