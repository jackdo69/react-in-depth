import styled, { keyframes } from 'styled-components';

const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }`;
const StyledLoading = styled.div`
  margin: 2em auto 3.4em;
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spin} 0.8s linear infinite;
`;

export default StyledLoading;
