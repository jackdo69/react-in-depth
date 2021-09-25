import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/theme';
import StyledElement from './styles/StyledElement';
import StyledInput from './styles/StyledInput';

function Celsius({ value, onChange }) {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledElement color={theme['green']}>
      <label>Celsius: </label>
      <StyledInput type='text' onChange={onChange} value={value} />
    </StyledElement>
  );
}

function Fahrenheit({ value, onChange }) {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledElement color={theme['brown']}>
      <label>Fahrenheit: </label>
      <StyledInput type='text' onChange={onChange} value={value} />
    </StyledElement>
  );
}

function TemperatureCalculator() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFarenheit] = useState(0);
  const { theme } = useContext(ThemeContext);

  function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  function handleTempChange(e, type) {
    const val = e.target.value;
    let converted;
    if (type === 'celsius') {
      converted = toFahrenheit(val);
      setCelsius(val);
      setFarenheit(converted);
    }
    if (type === 'fahrenheit') {
      converted = toCelsius(val);
      setCelsius(converted);
      setFarenheit(val);
    }
  }

  return (
    <StyledElement color={theme['red']}>
      <Celsius
        value={celsius}
        onChange={(e) => handleTempChange(e, 'celsius')}
      />
      <Fahrenheit
        value={fahrenheit}
        onChange={(e) => handleTempChange(e, 'fahrenheit')}
      />
    </StyledElement>
  );
}

export default TemperatureCalculator;
