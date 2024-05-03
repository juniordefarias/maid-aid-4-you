import styled, { css } from 'styled-components';

const breakpoints = {
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

export const Container = styled.section`
  padding: 96px 0;

  background-color: ${({ theme }) => theme.colors.primary.light};

  border-radius: 32px 32px 0 0;

  h2 {
    font-size: 54px;
    font-weight: 800;
  }

  /* ${respondTo('large')`
    padding-top: 120px;
  `} */
  ${respondTo('large')`
    padding-top: 124px;
  `}
`;