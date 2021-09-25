import styled from 'styled-components';

const StyledHeader = styled.div`
  border-radius: 10px;
  margin: 1em;
  display: flex;
  justify-content: center;
  background: rgb(109, 203, 161);
  background: linear-gradient(
    0deg,
    rgba(109, 203, 161, 1) 0%,
    rgba(0, 215, 255, 1) 100%
  );
  div {
    padding: 0.8em;
    margin: 0 5px 0 5px;
    a {
      text-decoration: none;
      text-transform: uppercase;
      font-size: 18px;
    }
  }
  div: hover {
    background-color: #eb98bb;
  }
`;

export default StyledHeader;
