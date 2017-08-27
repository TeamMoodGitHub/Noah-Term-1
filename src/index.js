import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'

import 'bootstrap/dist/css/bootstrap.min.css';
import App from 'App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'

const history = createHistory()

const WrappedApp = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>
)

ReactDOM.render(<WrappedApp/>, document.getElementById('root'))
registerServiceWorker();
