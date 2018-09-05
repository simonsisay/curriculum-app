import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import AppRouter from './routers/AppRouter'


ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
