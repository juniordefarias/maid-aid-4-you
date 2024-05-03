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
  h2 {
    font-size: 48px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primary.dark};

    ${respondTo('large')`
      font-size: 54px;
    `}
  }

  p {
    font-weight: 300;
  }

`;

export const HomeContainer = styled.div`
  padding: 148px 0;

  background-color: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.primary.light};

  text-align: center;

  position: relative;

  .home__content {
    max-width: 600px;
    margin: 0 auto 24px;
  }

  h1 {
    font-size: 60px;
    font-weight: 800;
    margin-bottom: 16px;
  }

  p {
    font-weight: 300;
    margin-bottom: 32px;
  }

  img {
    max-width: 660px;

    width: 80%;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    
    margin-bottom: -224px;
    z-index: 100;

    ${respondTo('medium')`
      margin-bottom: -290px;
    `}
  }

  svg {
    width: 80%;

    position: absolute;

    &:first-of-type {
      left: 4px;
      width: 55%;
      max-width: 460px;

      bottom: -140px;

      ${respondTo('large')`
        left: 50%;
        transform: translateX(-600px);
      `}
    }

    &:last-of-type {
      right: 4px;
      width: 60%;
      max-width: 505px;

      bottom: -160px;

      ${respondTo('large')`
        right: 50%;
        transform: translateX(600px);
      `}
    }
  }
`;

export const FreeContainer = styled.div`
  padding: 200px 0 96px;

  ${respondTo('medium')`
    padding: 320px 0 96px;
  `}

  & > section {
    display: grid;
    gap: 48px;

    color: ${({ theme }) => theme.colors.primary.dark};

    img {
      max-width: 348px;
      margin: auto;
    }

    div {
      max-width: 600px;
      align-self: center;
    }

    ${respondTo('medium')`
      grid-template-columns: repeat(2, 1fr);
      gap: 94px;

      img {
        max-width: initial;
      }
      
    `}

    ${respondTo('large')`
      grid-template-columns: 505px 1fr;
    `}
  }

  h2 {
    margin-bottom: 24px;
    max-width: 524px;

    ${respondTo('medium')`
      font-size: 54px;
    `};
  }

  p {
    margin-bottom: 32px;
  }
`;

export const ServicesContainer = styled.div`
  padding: 80px 0 160px;

  .services__content {
    display: grid;
    gap: 32px;

    color: ${({ theme }) => theme.colors.primary.dark};

    margin-left: 16px;

    margin-bottom: 64px;
    
    ${respondTo('large')`
      max-width: 1200px;
      margin: 0 auto 64px;
      padding: 0px;
      
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        max-width: 388px;
      }

      p {
        max-width: 600px;
      }
    `}
  }

  section {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 80%;
    gap: 16px;

    padding-left: 16px;

    overflow-x: auto;
    /* overflow-y: scroll; */
    overscroll-behavior-inline: contain;

    scrollbar-width: none;
    
    padding: 16px 20px 16px 20px;

    ${respondTo('large')`
      grid-auto-flow: initial;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;

      max-width: 1200px;
      margin: auto;
      padding: 0px;
    `}

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      align-self: stretch;
      gap: 16px;
  
      //width: 300px;
      padding: 32px /* 24px */;

      border-radius: 8px;
      border: 2px solid ${({ theme }) => theme.colors.gray.light};

      background-color: ${({ theme }) => theme.colors.white};
      /* color: ${({ theme }) => theme.colors.primary.dark}; */

      img {
        height: 92px;
        justify-self: start;
        width: auto;
      }

      h4 {
        font-size: 20px;
        font-style: normal;
        font-weight: 800;
        line-height: 110%;
      }

      p {
        font-size: 14px;
        font-weight: 300;
        text-align: justify;
        line-height: 110%;
      }

      button {
        margin-top: 16px;
      }
    }
  }
`;

export const FormContainer = styled.section`
  padding: 96px 0;

  background-color: ${({ theme }) => theme.colors.primary.light};

  border-radius: 32px 32px 0 0;

  /* ${respondTo('large')`
    padding-top: 120px;
  `} */
  ${respondTo('large')`
    padding-top: 124px;
  `}
`;

export const TestimonialsContainer = styled.div`
  padding: 180px 0 96px;
  text-align: center;

  h2 {
    text-align: start;
    margin-left: 16px;
    margin-bottom: 32px;

    ${respondTo('large')`
      text-align: center;
    `};

    ${respondTo('medium')`
      font-size: 54px;
    `};
  }

  button {
    margin-top: 24px;
  }

  section {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 80%;
    gap: 16px;

    ${respondTo('small')`
      grid-auto-columns: 44%;
    `}

    ${respondTo('large')`
      grid-auto-flow: initial;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;

      max-width: 1200px;
      margin: auto;
      padding: 0px;
    `}

    padding-left: 16px;

    overflow-x: auto;
    /* overflow-y: scroll; */
    overscroll-behavior-inline: contain;

    scrollbar-width: none;
    
    padding: 16px 20px 16px 20px;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      align-self: stretch;
      gap: 16px;
  
      //width: 300px;
      padding: 72px 32px 48px;

      border-radius: 8px;
      border: 2px solid ${({ theme }) => theme.colors.gray.light};

      background-color: ${({ theme }) => theme.colors.white};
      /* color: ${({ theme }) => theme.colors.primary.dark}; */

      /* img {
        height: 92px;
        justify-self: start;
        width: auto;
      } */

      div {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      img {
        width: 32px;
      }

      strong {
        color: ${({ theme }) => theme.colors.primary.main};
      }

      p {
        font-size: 14px;
        font-weight: 300;
        text-align: justify;
        line-height: 110%;

        color: ${({ theme }) => theme.colors.gray.dark};
      }

      button {
        margin-top: 16px;
      }
    }
  }
`;
