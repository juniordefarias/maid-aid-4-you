import styled, { css } from 'styled-components';

const breakpoints = {
  xsmall: '376px',
  small: '576px',
  medium: '768px',
  large: '992px',
  xlarge: '1200px',
};

const respondTo = (size) => (content) => css`
  @media (min-width: ${breakpoints[size]}) {
    ${content}
  }
`;

export const Container = styled.main`
  padding-top: 24px;

  background-color: ${({ theme }) => theme.colors.primary.light};
`;