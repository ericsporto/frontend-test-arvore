import styled from 'styled-components';
import Brand from '../../../public/img/brand.svg';
import UserAvatar from '../userAvatar';
import SearchInput from '../searchInput';

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-shadow: 0px 4px 5px rgba(5, 59, 75, 0.06);
`;

const Header = () => {
  return (
    <HeaderContainer>
      <img src={Brand} width="140px" height="30px" />
      <div style={{padding: '0 100px', width: '100%'}}>
        <SearchInput />
      </div>
      <UserAvatar name="Alessandra" />
    </HeaderContainer>
  );
};

Header.displayName = 'Header';
export default Header;
