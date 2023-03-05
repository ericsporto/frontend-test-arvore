import styled from 'styled-components';

export const BookBox = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 1200px) {
    max-width: 900px;
  }
  @media (max-width: 1024px) {
    max-width: 700px;
    height: 275px;
  }
  @media (max-width: 800px) {
    max-width: 606px;
  }
  @media (max-width: 800px) {
    max-width: 550px;
    padding-left: 20px;
  }
  @media (max-width: 530px) {
    max-width: 500px;
    height: 115px;

  }
`;
export const BookFilteredBox = styled.div`
  display: flex;
  max-width: 1136px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 1200px) {
    max-width: 900px;
  }
  @media (max-width: 1024px) {
    max-width: 700px;
  }
  @media (max-width: 800px) {
    max-width: 606px;
  }
`;
