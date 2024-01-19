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
  min-height: 50vh;
  background-color: ${({ theme }) => theme.colors.primary.light};

  h2 {
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 110%;

    ${respondTo('large')`
      font-size: 54px;
    `} 
  }
`;

export const Header = styled.header`
  position: absolute;
  width: 100%;
  top: 32px;

  div {
    max-width: 960px;
    width: calc(100% - 40px);
    margin: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      height: 48px;
      width: auto;
    }

    p {
      color: ${({ theme }) => theme.colors.primary.light};
    }
  }
`;


export const HomeContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.primary.light};
  padding: /* 100px */ 84px 0 120px;

  ${respondTo('xsmall')`
    padding: 140px 0 120px;
  `}

  section {
    display: grid;
    gap: 24px;
    
    ${respondTo('medium')`
      grid-template-columns: auto 1fr;
      align-items: center;
    `}

    /* img */ .home__img {
      order: -1;

      ${respondTo('medium')`
        order: 1;
      `}
    }

    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      align-self: stretch;

      align-self: center;

      max-width: 420px;

      h1 {
        font-size: 60px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%;

        ${respondTo('large')`
          font-size: 80px;
        `} 
      }

      p {
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: 110%;
      }

      button {
        margin-top: 12px;
      }
    }
  }
`;

export const FormContainer = styled.section`
  padding-top: 96px;

  /* ${respondTo('large')`
    padding-top: 120px;
  `} */
  ${respondTo('large')`
    padding-top: 124px;
  `}
`;

export const ServicesContainer = styled.section`
  padding-top: 96px;

  padding: 80px 0 64px;

  /* ${respondTo('large')`
    padding: 120px 0 120px;
  `} */
  ${respondTo('large')`
    padding: 220px 0 240px;
  `}

  h2 {
    max-width: 1200px;
    width: calc(100% - 40px);
    margin: 0 auto 48px;

    color: ${({ theme }) => theme.colors.primary.dark};

    ${respondTo('large')`
      text-align: center;
    `} 
  }
  
  section {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 80%;
    gap: 16px;
    
    ${respondTo('medium')`
      grid-auto-columns: 39%;
    `}

    ${respondTo('large')`
      grid-auto-columns: 28%;
    `} 
    
    ${respondTo('xlarge')`
      grid-auto-flow: initial;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;

      max-width: 960px;
      margin: auto;
      padding: 0px;
    `}

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
      padding: 32px 24px;
  
      box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.12);
      border-radius: 8px;

      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.primary.dark};

      img {
        height: 92px;
        justify-self: start;
        width: auto;
      }

      h4 {
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
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

export const FreeContainer = styled.section`
  color: ${({ theme }) => theme.colors.primary.dark};

  & > section {
    display: grid;
    gap: 48px;

    ${respondTo('medium')`
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    `}
  }

  padding-bottom: 96px;

  /* ${respondTo('large')`
    padding-bottom: 120px;
  `} */

  ${respondTo('large')`
    padding-bottom: 260px;
  `}

  p {
    margin: 16px 0 28px
  }
`;

export const TestimonialsContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.primary.main};

  padding: 96px 0 96px;

  ${respondTo('large')`
    padding: 180px 0 200px;
  `}
  
  h2 {
    color: ${({ theme }) => theme.colors.primary.light};
    margin-bottom: 48px;

    ${respondTo('large')`
      text-align: center;
    `} 
  }

  & > section {
    section {
      display: grid;
      gap: 24px;

      ${respondTo('medium')`
        grid-template-columns: repeat(2, 1fr);
      `}

      ${respondTo('large')`
        grid-template-columns: repeat(3, 1fr);
      `}

      & > div {
        padding: 48px 24px 32px 24px;

        display: grid;
        gap: 24px;

        background-color: #fff;

        border-radius: 8px;
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.12);

        color: ${({ theme }) => theme.colors.primary.dark};

        div {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        img {
          width: 32px;
        }

        strong {
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
        }
      }
    }
  }
`;