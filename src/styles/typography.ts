import styled, { css } from 'styled-components';
import BaseTitle from './components/typography';

export const StyledText = styled(BaseTitle)`
  font-family: 'Inter', sans-serif;
  font-weight: ${({ fontWeight }) => fontWeight};

  ${({ fontSize }) => {
    switch (fontSize) {
      case '2xl':
        return css`
          font-size: 28px;
          line-height: 28px;
        `;
      case 'lg':
        return css`
          font-size: 22px;
          line-height: 22px;
        `;
      case 'md':
        return css`
          font-size: 16px;
          line-height: 16px;
        `;
      case 'sm':
        return css`
          font-size: 14px;
          line-height: 14px;
        `;
      case 'xs':
        return css`
          font-size: 12.8px;
          line-height: 16px;
        `;
    }
  }}
`;
