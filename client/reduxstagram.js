import React from 'react';
import {render} from 'react-dom';

// import css
import css from './styles/style.styl';

// import components
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// import https://docs.sentry.io/clients/javascript/integrations/react/
import Raven from 'raven-js';

const router = (
    <Provider store={store}>
        <Router history = {history} >
            <Route path = '/' component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
);

// setup raven log
Raven.config('https://2a22a40e8e3243fc85d93335ff212d8e@sentry.io/119451').install();

render(router, document.getElementById('root'));

