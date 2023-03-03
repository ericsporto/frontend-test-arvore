import styled from 'styled-components';
import Lupa from '../../../public/img/lupa.svg';
import { StyledText } from '../../styles/typography';

export const StyledInputDiv = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  background: #f1f7fc;
  border: 1px solid #dee1e6;
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

export const StyledInputHeader = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
`;
export const StyledButtonHeader = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const SearchInput = () => {
  return (
    <StyledInputDiv>
      <StyledInputHeader placeholder="Search" />
      <StyledButtonHeader onClick={() => {}}>
        <img src={Lupa} alt="lupa" width="16px" height="16px" />
      </StyledButtonHeader>
    </StyledInputDiv>
  );
};

SearchInput.displayName = 'SearchInput';
export default SearchInput;
