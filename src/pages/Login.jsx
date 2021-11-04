import React, { useContext, useState } from 'react';
import StyledElement from '../components/styles/StyledElement';
import StyledInput from '../components/styles/StyledInput';
import StyledButton from '../components/styles/StyledButton';
import { ThemeContext } from '../context/theme';

function Login() {
  const { theme } = useContext(ThemeContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
      <StyledButton>Submit</StyledButton>
    </StyledElement>
  );
}

export default Login;
