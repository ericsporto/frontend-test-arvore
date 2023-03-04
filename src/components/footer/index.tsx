import styled from 'styled-components';
import Brand from '../../../public/img/brand.svg';
import UserAvatar from '../userAvatar';
import SearchInput from '../searchInput';
import { StyledText } from '../../styles/typography';

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  border-top: 0.5px solid #d9d9d9;
  color: #b2b4b9;
`;
export const FooterButton = styled.button`
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  gap: 16px;
  background: #ffffff;
  border: 1px solid #b2b4b9;
  border-radius: 10px;
  color: #b2b4b9;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <StyledText tag="h6" fontSize="xs" fontWeight={500}>
        Copyright © 2021 Árvore. Todos os direitos reservados.
      </StyledText>
      <div style={{ display: 'flex', gap:"12px" }}>
        <FooterButton>Política de privacidade</FooterButton>
        <FooterButton>Ajuda</FooterButton>
      </div>
    </FooterContainer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
