import React, { useContext, useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import StyledElement from '../components/styles/StyledElement';
import StyledInput from '../components/styles/StyledInput';
import StyledButton from '../components/styles/StyledButton';
//context
import { ThemeContext } from '../context/theme';
import { DispatchContext, ACTIONS } from '../context/auth';

function Login() {
  const { theme } = useContext(ThemeContext);
  const dispatch = useContext(DispatchContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = () => {
    dispatch({ type: ACTIONS.LOGIN });
    history.push('/app/home');
  };

  return (
    <StyledElement color={theme['purple']}>
      <label>Username: </label>
      <StyledInput
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label>Password: </label>
      <StyledInput
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <StyledButton onClick={() => handleSubmit()}>Submit</StyledButton>
    </StyledElement>
  );
}

export default withRouter(Login);
