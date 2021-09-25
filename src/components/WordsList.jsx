import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//styles
import StyledElement from './styles/StyledElement';
import StyledButton from './styles/StyledButton';
//data
import para from '../resources/randomParagraph';
//context
import { ThemeContext } from '../context/theme';

function Display({ words }) {
  return (
    <div style={{ maxWidth: '200px' }}>
      {words.map((word, i) => (
        <span key={i}>{word} </span>
      ))}
    </div>
  );
}

function WordsList() {
  const [words, setWords] = useState(['Hello']);
  const { theme } = useContext(ThemeContext);

  function handleAdd() {
    const wordList = para.split(' ');
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    setWords([...words, randomWord]);
  }
  return (
    <StyledElement color={theme['brown']}>
      <StyledButton onClick={() => handleAdd()}>Add word</StyledButton>
      <StyledButton onClick={() => setWords([])}>Refresh</StyledButton>
      <Display words={words} />
    </StyledElement>
  );
}

WordsList.propTypes = {
  words: PropTypes.arrayOf(PropTypes.object),
};

export default WordsList;
