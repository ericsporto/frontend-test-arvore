import styled from 'styled-components';
import ImageAvatar from '../../../public/img/avatar.svg';
import Bell from '../../../public/img/bell-mobile.svg';
import { StyledText } from '../../styles/typography';
interface UserAvatarProps {
  url?: string;
  name: string;
}

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const AvatarBox = styled.div`
  display: flex;
  border-radius: 100%;
  align-items: center;
  gap: 15px;
`;
export const BellBox = styled.div`
  display: flex;
  @media (min-width: 1024px) {
    display: none;
  }
`;
export const NameBox = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
  }
`;
export const StyledSelect = styled.select`
  background: transparent;
  border: none;
  outline: none;
`;

const UserAvatar: React.FC<UserAvatarProps> = ({ url, name }) => {
  return (
    <AvatarContainer>
      <AvatarBox>
        <BellBox>
          <img src={Bell} alt="bell" style={{ paddingRight: '20px' }} />
        </BellBox>
        <img src={url ? url : ImageAvatar} alt="avatar" />
        <NameBox>
          <StyledText tag="h5" fontSize="md" fontWeight={700}>
            {name}
          </StyledText>
          <StyledSelect>
            <option value=""></option>
          </StyledSelect>
        </NameBox>
      </AvatarBox>
    </AvatarContainer>
  );
};

UserAvatar.displayName = 'UserAvatar';
export default UserAvatar;
