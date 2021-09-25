import React from 'react';
import { Link } from 'react-router-dom';
import StyledHeader from './styles/StyledHeader';

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link to='/posts'>Posts</Link>
      </div>
    </StyledHeader>
  );
}
