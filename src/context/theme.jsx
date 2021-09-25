import React, { useReducer } from 'react';

const ACTIONS = {
  DARK: 'DARK',
  LIGHT: 'LIGHT',
};

export const theme = {
  light: {
    red: '#ffbdbd',
    brown: '#dec892',
    green: '#a7e0a6',
    teal: '#a5d4d4',
    blue: '#bdc8ff',
    purple: '#eca9fc',
  },
  dark: {
    red: '#e84d48',
    brown: '#a36f0d',
    green: '#3f9c3d',
    teal: '#3d9c9c',
    blue: '#36a8ff',
    purple: '#b936ff',
  },
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.DARK:
      return { theme: theme.dark };
    case ACTIONS.LIGHT:
      return { theme: theme.light };
    default:
      return state;
  }
}

const ThemeContext = React.createContext();
const DispatchContext = React.createContext();

function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    theme: theme.light,
  });

  return (
    <ThemeContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

export { ACTIONS, ThemeProvider, ThemeContext, DispatchContext };
