import React, { useContext } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import StyledHeader from './styles/StyledHeader';
//context
import { DispatchContext, ACTIONS } from '../context/auth';

function Header() {
  const history = useHistory();
  const dispatch = useContext(DispatchContext);

  const handleSignout = () => {
    dispatch({ type: ACTIONS.LOGOUT });
    history.push('/login');
  };
  return (
    <StyledHeader>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link to='/app/posts'>Posts</Link>
      </div>
      <div>
        <a onClick={() => handleSignout()}>Signout</a>
      </div>
    </StyledHeader>
  );
}

export default withRouter(Header);
