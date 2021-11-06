import React, { lazy, Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './Header';

//lazy loading
const Home = lazy(() => import('../pages/Home'));
const Posts = lazy(() => import('../pages/Posts'));

function Wrapper() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/app/home' component={Home} />
        <Route path='/app/posts' component={Posts} />
      </Switch>
    </div>
  );
}

export default withRouter(Wrapper);
