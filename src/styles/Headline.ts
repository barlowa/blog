import styled from 'styled-components';

interface IHeadlineProps {
  size?: 'default' | 'large';
}

export default styled.h1<IHeadlineProps>`
  margin: 0;
  font-size: ${({ size, theme: { typography } }) => {
    if (size) {
      return {
        ['default']: typography.headlineSmall,
        ['large']: typography.headline,
      }[size];
    }
    return typography.headlineSmall;
  }};
  color: ${({ theme: { colours } }) => colours.blue};
`;
