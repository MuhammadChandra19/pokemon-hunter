import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@app/views/style/_index.scss'
import { AppStore, history } from './store';
// import App from './app';
import { Layout } from './views/layout';
Layout

ReactDOM.render(
  <Provider store={AppStore}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </Router>
  </Provider>,

  document.getElementById('root'));
