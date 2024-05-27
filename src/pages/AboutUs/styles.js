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
  .bg-primary-light {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  h2 {
    ${respondTo('large')`
     font-size: 54px !important;
  `};
  }
  
`;

export const HomeContainer = styled.main`
  padding: 148px 0;  

  color: ${({ theme }) => theme.colors.primary.dark};
  
  h1 {
    font-size: 28px;
    margin-bottom: 40px;
  }

  ul {
    display: flex;
    gap: 12px;

    margin-bottom: 80px;

    ${respondTo('large')`
      margin-bottom: -20px;
    `};

    strong {
      display: inline-block;
      font-size: 24px;
      margin-bottom: 16px;
    }

    p {
      font-size: 16px;
      font-weight: 300;

      ${respondTo('medium')`
        font-size: 20px;
      `};
    }
  }

  /* img */ .home__img {
    margin-bottom: -245px;

    ${respondTo('large')`
      max-width: 450px;
      margin-bottom: -160px;
      margin-top: -160px;
    `};
  }

  ${respondTo('medium')`
    h1 {
      font-size: 60px;
    }
  `};

  ${respondTo('large')`
    padding: 148px 0 54px; 
    h1 {
      max-width: 977px;
      margin-bottom: 96px;
    }

    ul {
      max-width: 500px;
      margin-left: auto;
    }
  `};

  ${respondTo('xlarge')`
    ul {
      max-width: 600px;
      margin-left: auto;
    }
  `};
`;

export const StoryContainer = styled.main`
  padding: 280px 0 180px;

  background-color: ${({ theme }) => theme.colors.primary.light};
  color: ${({ theme }) => theme.colors.primary.dark};

  & > section {
    ${respondTo('large')`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    `};
  }

  .story__content {
    h2 {
      font-size: 48px;
      margin-bottom: 24px;
    }

    p {
      margin-bottom: 16px;
      line-height: 130%;
    }

    button {
      margin-top: 24px;
    }

    
  }
`;