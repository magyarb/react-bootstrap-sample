import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router>
    <div>
        <Route path="*" component={App}/>
    </div>
</Router>, document.getElementById('root'));
registerServiceWorker();
