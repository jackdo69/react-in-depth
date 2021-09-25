import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//redux
import { useSelector } from 'react-redux';
//styles
import StyledButton from './styles/StyledButton';
import StyledElement from './styles/StyledElement';
import withDataFetcher from '../hoc/withDataFetcher';
import { ThemeContext } from '../context/theme';

function Books({ addItem }) {
  const { theme } = useContext(ThemeContext);
  const data = useSelector((state) => state.book.list);

  return (
    <StyledElement color={theme['green']}>
      <StyledButton onClick={(e) => addItem(e, 'books')}>Add Book</StyledButton>
      {data.map((book) => (
        <div key={book.id}>{book.title}</div>
      ))}
    </StyledElement>
  );
}

Books.propTypes = {
  addItem: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
};

export default withDataFetcher(Books, 'books');
