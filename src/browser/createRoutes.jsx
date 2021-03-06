import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './app/App';
import AuthPage from './auth/AuthPage';
import BeerPage from './beer/BeerPage';
import LoadingPage from './loading/LoadingPage';
import NotFoundPage from './notfound/NotFoundPage';
import SignUpPage from './signup/SignUpPage';

export default function createRoutes() {
  return (
    <Route component={App} path="/">
      <IndexRoute component={LoadingPage} />
      <Route component={LoadingPage} path="dashboard" />
      <Route component={AuthPage} path="login" />
      <Route component={BeerPage} path="beer" />
      <Route component={SignUpPage} path="signup" />
      <Route component={NotFoundPage} path="*" />
    </Route>
  );
}
