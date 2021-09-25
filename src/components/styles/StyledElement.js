import styled from 'styled-components';

const StyledElement = styled.div`
  border-radius: 10px;
  padding: 1em;
  margin: 1em;
  color: #f7f7f7;
  font-size: 20px;
  font-weight: 500;
  background: ${(props) => props.color};
`;

export default StyledElement;
