import styled from 'styled-components';
import ImageAvatar from '../../../public/img/avatar.svg';
import { StyledText } from '../../styles/typography';

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledSelect = styled.select`
  background: transparent;
  border: none;
  outline: none;
`;

interface UserAvatarProps {
  url?: string;
  name: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ url, name }) => {
  return (
    <AvatarContainer>
      <div
        style={{
          display: 'flex',
          borderRadius: '100%',
          alignItems: 'center',
        }}
      >
        <img
          src={url ? url : ImageAvatar}
          alt="avatar"
          style={{ paddingRight: '20px' }}
        />
        <StyledText tag="h5" fontSize="md" fontWeight={700}>{name}</StyledText>
      </div>
      <StyledSelect>
        <option value=""></option>
      </StyledSelect>
    </AvatarContainer>
  );
};

UserAvatar.displayName = 'UserAvatar';
export default UserAvatar;
