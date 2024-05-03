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

export const Container = styled.footer`
  //overflow: hidden;

  background-color: #350E28;
`;

export const ContentContainer = styled.div`
  
  /* max-width: 960px;
  width: calc(100% - 40px);
  margin: auto; */

  color: ${({ theme }) => theme.colors.primary.light};
  padding: 88px 0 64px;

  display: grid;
  gap: 80px;
`;

export const Row = styled.div`
  &:nth-of-type(1) {
    @media (min-width: 992px) {
      display: flex;
    }
  }

  &:nth-of-type(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    border-top: 1px solid ${({ theme }) => theme.colors.primary.light};
    padding-top: 40px;

    span {
      //color: white;
      font-size: 14px;
    }

    div:nth-of-type(2) {
      display: flex;
      gap: 24px;

      a svg path {
        transition: all 0.3s ease-in;

        &:hover {
          fill: ${({ theme }) => theme.colors.primary.main};
        }

        &:active {
          fill: ${({ theme }) => theme.colors.primary.main};
        }
      }
    }
  }
`;

export const LogoContainer = styled.div`
  margin: 0 120px 60px 0;

  h3 {
    font-size: 36px;
    margin-bottom: 24px;
  }

`;

export const InfoContainer = styled.div`
  display: grid;
  gap: 54px;

  flex: 1;

  h3 {
    //color: white;
    margin-bottom: 24px;
  }

  ul {
    display: grid;
    gap: 12px;
  }

  li {
    ul {
      display: flex;

      svg {
        path {
          transition: all 0.2s ease-in;
          fill: ${({ theme }) => theme.colors.primary.light};
        }
      }
    }
  }

  a {
    transition: all 0.2s ease;
    display: flex;
    align-items: center;

    svg {
      margin-right: 4px;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary.main};

      svg path {
        fill: ${({ theme }) => theme.colors.primary.main};
      }
    }

    &:active {
      color: ${({ theme }) => theme.colors.primary.main};

      svg path {
        fill: ${({ theme }) => theme.colors.primary.main};
      }
    }
  }

  div:nth-of-type(1) {
    text-align: justify;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
