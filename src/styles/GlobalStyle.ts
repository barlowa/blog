import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colours.babyBlue};
    font-family:'system-ui', sans-serif;
    margin: 0;
  }
`;
export default GlobalStyle;
