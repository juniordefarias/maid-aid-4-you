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

  /* background-color: ${({ theme }) => theme.colors.primary.light}; */
  color: ${({ theme }) => theme.colors.primary.dark};

  & > section {
    display: grid;
    gap: 48px;

    ${respondTo('medium')`
      gap: 64px;
      grid-template-columns: repeat(2, 1fr);
    `}

    ${respondTo('xlarge')`
      gap: 80px;
      grid-template-columns: 600px 1fr;
    `}
  }

  h2 {
    font-size: 48px;
    font-weight: 800;

    margin-bottom: 24px;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  p {
    margin-bottom: 24px;
    font-size: 18px;
  }

  /* ${respondTo('large')`
    padding-top: 120px;
  `} */
  ${respondTo('large')`
    padding-top: 124px;
  `}
`;

export const Checklist = styled.ul`
  & > li {
    padding: 24px 8px;

    &:not(:last-of-type) {
      border-bottom: 1px solid #C6A9A1;
    }
  }

  strong {
    font-size: 22px;
    font-weight: 800px;
    color: ${({ theme }) => theme.colors.primary.main};

    display: flex;
    align-items: center;
    gap: 8px;

    cursor: pointer;

    position: relative;


    &::after {
      content: '';
      width: 8px;
      height: 8px;

      border-right: 3px solid ${({ theme }) => theme.colors.primary.dark};
      border-bottom: 3px solid ${({ theme }) => theme.colors.primary.dark};

      transform: rotate(45deg);

      position: absolute;
      right: 16px;
      top: 50%;
    }
  }

  ol {
    display: none;

    margin-top: 16px;

    // display: grid;
    gap: 8px;

    font-weight: 300;

    li {
      font-size: 18px;
      list-style-type: decimal;

      margin-left: 32px;
    }
  }
  
  ol.selected {
    display: grid;
  }
`;