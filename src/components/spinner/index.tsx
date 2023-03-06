import styled from 'styled-components';

const StyledSpinner = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #45d0c1;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  @media (max-width: 530px) {
    width: 60px;
    height: 60px;
    border: 8px solid #f3f3f3;
    border-top: 8px solid #45d0c1;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
const SpinnerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 20px auto;
  justify-content: center;
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <StyledSpinner />
    </SpinnerContainer>
  );
};
export default Spinner;
