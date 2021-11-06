import React, { Suspense, lazy, useContext, useEffect } from 'react';
//router
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
//redux
import { store } from './store';
import { Provider } from 'react-redux';
//components
import ErrorBoundaries from './components/ErrorBoundaries';
import StyledLoading from './components/styles/StyledLoading';
//lazy loading
const Wrapper = lazy(() => import('./components/Wrapper'));
const Login = lazy(() => import('./pages/Login'));
//context
import { AuthContext } from './context/auth';

export default function App() {
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    console.log(isLoggedIn);
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <ErrorBoundaries>
          <Suspense fallback={<StyledLoading />}>
            <Switch>
              <Route
                exact
                path='/'
                render={() => <Redirect to='/app/home' />}
              />
              <Route
                exact
                path='/app'
                render={() => <Redirect to='/app/home' />}
              />
              <PrivateRoute path='/app' component={Wrapper} />
              <PublicRoute path='/login' component={Login} />
            </Switch>
          </Suspense>
        </ErrorBoundaries>
      </Router>
    </Provider>
  );

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isLoggedIn ? (
            <Redirect to={{ pathname: '/' }} />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isLoggedIn ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }
}
