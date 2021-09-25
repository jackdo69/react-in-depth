import React, { useContext, useState, useEffect } from 'react';
import StyledElement from './styles/StyledElement';
import { ThemeContext } from '../context/theme';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  function tick() {
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <StyledElement color={theme['purple']}>The time is {time}</StyledElement>
  );
}

export default Clock;
