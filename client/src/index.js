import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import TaskTracker from './containers/TaskTracker';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter >
        <TaskTracker />
    </BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();