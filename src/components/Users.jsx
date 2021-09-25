import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//redux
import { useSelector } from 'react-redux';
//styles
import StyledButton from './styles/StyledButton';
import StyledElement from './styles/StyledElement';
import withDataFetcher from '../hoc/withDataFetcher';
import { ThemeContext } from '../context/theme';

function Users({ addItem }) {
  const { theme } = useContext(ThemeContext);
  const data = useSelector((state) => state.user.list);
  return (
    <StyledElement color={theme['teal']}>
      <StyledButton onClick={(e) => addItem(e, 'users')}>Add User</StyledButton>
      {data.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </StyledElement>
  );
}

Users.propTypes = {
  addItem: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
};

export default withDataFetcher(Users, 'users');
