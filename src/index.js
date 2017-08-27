import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import 'bootstrap/dist/css/bootstrap.min.css';
import App from 'App';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory()

const WrappedApp = () => (
  <Router history={history}>
    <Route path="/" component={App}/>
  </Router>
)

ReactDOM.render(<WrappedApp/>, document.getElementById('root'))
registerServiceWorker();
