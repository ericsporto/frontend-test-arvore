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
  @media (max-width: 1024px) {
    padding: 0 10px;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  padding: 0 100px;
  width: 100%;
  @media (max-width: 1024px) {
    padding: 0 30px;
  }
  @media (max-width: 530px) {
    display: none;
  }
`;
export const SearchContainerMobile = styled.div`
  display: flex;
  padding: 30px 20px 10px 20px;
  width: 100%;
  @media (min-width: 530px) {
    display: none;
  }
`;

const Header: React.FC<HeaderProps> = ({
  setText,
  setHasSearch,
  handleSearch,
}) => {
  return (
    <>
      <HeaderContainer>
        <img src={Brand} width="140px" height="30px" />
        <SearchContainer>
          <SearchInput
            setText={setText}
            setHasSearch={setHasSearch}
            handleSearch={handleSearch}
          />
        </SearchContainer>
        <UserAvatar name="Alessandra" />
      </HeaderContainer>
      <SearchContainerMobile>
        <SearchInput
          setText={setText}
          setHasSearch={setHasSearch}
          handleSearch={handleSearch}
        />
      </SearchContainerMobile>
    </>
  );
};

Header.displayName = 'Header';
export default Header;
