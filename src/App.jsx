import React, { Suspense, lazy } from 'react';
//router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//redux
import { store } from './store';
import { Provider } from 'react-redux';
//components
import Header from './components/Header';
import ErrorBoundaries from './components/ErrorBoundaries';
import StyledLoading from './components/styles/StyledLoading';
//lazy loading
const Home = lazy(() => import('./pages/Home'));
const Posts = lazy(() => import('./pages/Posts'));

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <ErrorBoundaries>
          <Header />
          <Suspense fallback={<StyledLoading />}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/posts' component={Posts} />
            </Switch>
          </Suspense>
        </ErrorBoundaries>
      </Router>
    </Provider>
  );
}
