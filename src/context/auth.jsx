import React, { useReducer } from 'react';

const ACTIONS = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

const initialState = {
  isLoggedIn: false,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return { isLoggedIn: true };

    case ACTIONS.LOGOUT:
      return { isLoggedIn: false };

    default:
      return state;
  }
}

const AuthContext = React.createContext();
const DispatchContext = React.createContext();

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </AuthContext.Provider>
  );
}

export { ACTIONS, AuthProvider, AuthContext, DispatchContext };
