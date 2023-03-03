import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ul, ol, li {
        padding: 0;
        margin: 0;
        list-style: none;
    }
`;

export const ColorsTheme = {
  colors: {
    background: '#F5F5F5',
    white: '#FFFFFF',
    green: '#DAF6F3',
    dark1: '#F1F7FC',
    dark2: '#DEE1E6',
    dark5: '#406A76',
    dark6: '#053B4B',
    purple1: '#A977D8',
    purple2: '#8553F4',
    gray1: '#9EAEB7',
    gray2: '#2D2D2E',
    gray3: '#ADB7BF',
    gray4: '#B2B4B9',
    black: '#000000',
  },
};
