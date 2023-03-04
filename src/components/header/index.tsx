import styled from 'styled-components';
import Brand from '../../../public/img/brand.svg';
import UserAvatar from '../userAvatar';
import SearchInput from '../searchInput';

interface HeaderProps {
  setText: (text: string) => void;
  setHasSearch: (hasSearch: boolean) => void;
  handleSearch: () => void;
}

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-shadow: 0px 4px 5px rgba(5, 59, 75, 0.06);
`;

const Header: React.FC<HeaderProps> = ({ setText, setHasSearch, handleSearch }) => {
  return (
    <HeaderContainer>
      <img src={Brand} width="140px" height="30px" />
      <div style={{ padding: '0 100px', width: '100%' }}>
        <SearchInput setText={setText} setHasSearch={setHasSearch} handleSearch={handleSearch} />
      </div>
      <UserAvatar name="Alessandra" />
    </HeaderContainer>
  );
};

Header.displayName = 'Header';
export default Header;
