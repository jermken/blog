import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, BrowserRouter } from 'react-router-dom';
//import routes from './router/route.jsx';
import App from './container/layout/layout.jsx';

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
