import React from 'react';

import { render } from 'react-dom';

//Import css
import css from './styles/style.styl';
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import App from './components/App';

//Import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store';

import Raven from 'raven-js';
import { sentry_url } from './data/config';

Raven.config(sentry_url).install();



const router = (
  <Provider store= {store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router , document.getElementById('root'));