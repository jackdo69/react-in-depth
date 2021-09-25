import React, { useContext, useState } from 'react';
import StyledElement from './styles/StyledElement';
import StyledButton from './styles/StyledButton';
import { ThemeContext, DispatchContext, ACTIONS } from '../context/theme';
import PropTypes from 'prop-types';

function Toggle() {
  const [currentTheme, setCurrentTheme] = useState(ACTIONS.LIGHT);
  const dispatch = useContext(DispatchContext);
  const { theme } = useContext(ThemeContext);
  function handleClick() {
    switch (currentTheme) {
      case ACTIONS.LIGHT:
        dispatch({ type: ACTIONS.DARK });
        setCurrentTheme(ACTIONS.DARK);
        break;
      case ACTIONS.DARK:
        dispatch({ type: ACTIONS.LIGHT });
        setCurrentTheme(ACTIONS.LIGHT);
        break;
      default:
        console.log('No action matched');
    }
  }

  return (
    <StyledElement color={theme['brown']}>
      {currentTheme}
      <br />
      <StyledButton onClick={handleClick}>Toggle theme</StyledButton>
    </StyledElement>
  );
}

Toggle.propTypes = {
  toggleTheme: PropTypes.func,
  themeName: PropTypes.string,
};

export default Toggle;
