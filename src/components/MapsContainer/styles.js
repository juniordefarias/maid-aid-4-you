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

export const Container = styled.div`
  padding: 240px 0;

  section {
    position: relative;

    display: grid;
    gap: 64px;

    background-color: ${({ theme }) => theme.colors.primary.dark};
    color: #fff;
    
    padding: 64px 16px;
    border-radius: 32px;
    
    text-align: center;

    ${respondTo('large')`
      padding: 54px 120px;
      grid-template-columns: 350px 1fr;

      align-items: center;
    `}

    img {
      width: 242px;
      position: absolute;
      right: 32px;
      top: -208px;

      ${respondTo('medium')`
        right: 124px;
      `}
    }

    iframe {
      width: 100%;
      height: 300px;

      max-width: 600px;
      margin: auto;
    }

    h2 {
      color: #fff;
      font-size: 54px;

      span {
        color: ${({ theme }) => theme.colors.primary.main};
      }

      margin-bottom: 16px;
    }

    p {
      margin-bottom: 24px;

      font-size: 18px;

      max-width: 350px;
      margin: 0 auto 24px;
    }
  }
`;