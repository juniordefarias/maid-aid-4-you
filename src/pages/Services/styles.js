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

`;

export const HomeContainer = styled.div`
  padding: 148px 0 96px;  

  background-color: ${({ theme }) => theme.colors.primary.light};
  color: ${({ theme }) => theme.colors.primary.dark};
  

  h1 {
    font-size: 28px;

    margin-bottom: 40px;

    ${respondTo('medium')`
      font-size: 60px;
    `}
  }

  ul {
    display: flex;
    //gap: 12px;

    ${respondTo('medium')`
      gap: 24px;
    `}

    ${respondTo('xlarge')`
      max-width: 645px;
    `}

    justify-content: space-between;

    li {
      display: flex;
      flex-direction: column;
    }

    img {
      height: 80px;
      width: auto;
      margin: 0 auto 8px;

      ${respondTo('medium')`
        height: 100px;
      `}
    }

    strong {
      font-size: 14px;
      display: block;
      text-align: center;

      ${respondTo('small')`
        font-size: 22px;
      `}
    }
  }

  svg {
    width: 100%;

    margin-top: 48px;
  }


  ${respondTo('medium')`
    padding: 148px 0px 148px; 
  `}


  ${respondTo('xlarge')`
    padding: 148px 0px 180px; 

    & > section {
      display: grid;
      grid-template-columns: 1fr 743px;

      div {
        order: 1;
      }

      svg {
        align-self: end;
      }
    }

    h1 {
      max-width: 743px;
      margin-bottom: 80px;
      text-align: end;
    }

    ul {
      max-width: 645px;
      margin-left: auto;
    }
  `};
`;

export const KnowMoreContainer = styled.div`
  & > section {
    border: 2px solid ${({ theme }) => theme.colors.gray.light};
    border-radius: 32px;

    padding: 120px 16px 180px;

    ${respondTo('medium')`
      padding: 120px 64px 180px;
    `}

    ${respondTo('xlarge')`
      padding: 120px 120px 180px;
    `}

    display: grid;
    gap: 72px;

    color: ${({ theme }) => theme.colors.primary.dark};
    background-color: #fff;

    margin-top: -96px;

    ${respondTo('large')`
      margin-top: -116px;
    `}

    h2 {
      font-size: 42px;
      font-weight: 800;
    }

    h4 {
      font-size: 24px;
      margin-bottom: 24px;
    }

    p {
      font-weight: 300;
      margin-bottom: 16px;
    }


  }
`;

export const KnowMore = styled.div`
  & > div {

    p {
      font-size: 20px;
      text-align: justify;
    }

    button {
      margin-top: 8px;
    }

    svg {
      width: 100%;

      margin-top: 16px;

      ${respondTo('large')`
        margin-top: 48px;
      `}
    }
    
  }


  ${respondTo('large')`
    display: grid;
    grid-template-columns: 168px 1fr;
    gap: 120px;
  `}

  ul {
    display: flex;
    //gap: 12px;

    margin-bottom: 48px;

    ${respondTo('medium')`
      gap: 24px;
    `}

    ${respondTo('large')`
      display: grid;
      gap: 64px;
    `}

    ${respondTo('xlarge')`
      max-width: 645px;
    `}

    justify-content: space-between;

    li {
      display: flex;
      flex-direction: column;

      cursor: pointer;

      filter: grayscale(100%);
      opacity: 0.3;

      transition: all 0.2s ease-in;

      &:hover {
        opacity: 0.6;
      }

      &.selected {
        opacity: 1;
        filter: grayscale(0%);
      }
    }

    img {
      height: 80px;
      width: auto;
      margin: 0 auto 8px;

      ${respondTo('medium')`
        height: 100px;
      `}
    }

    strong {
      font-size: 14px;
      display: block;
      text-align: center;

      ${respondTo('small')`
        font-size: 22px;
      `}
    }
  }
`;
