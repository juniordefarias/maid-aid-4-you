import styled, { css } from 'styled-components';

import Button from '../Button';

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
  /* background-color: ${({ theme }) => theme.colors.primary.light}; */

  max-width: 1200px;
  width: calc(100% - 32px);
  margin: auto;

  display: grid;
  gap: 64px;

  .container__content {
    color: ${({ theme }) => theme.colors.primary.dark};
    

    div {
      position: sticky;
      top: 124px;
      z-index: 100;
    }

    h2 {
      margin-bottom: 24px;
      color: ${({ theme }) => theme.colors.primary.dark};
      line-height: 110%;
      font-weight: 800;

      span {
        color: ${({ theme }) => theme.colors.primary.main};
      }
    }

    ${respondTo('medium')`
      text-align: center;

      h2 {
        font-size: 54px;
      }

      p {
        font-size: 18px;
        max-width: 440px;
        margin: 0 auto;
      }
      
    `}

    ${respondTo('large')`
      justify-self: start;
      text-align: start;
      /* max-width: 420px; */
    `}
  }

  /* ${respondTo('medium')`
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  `} */

  ${respondTo('large')`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${respondTo('xlarge')`
    grid-template-columns: 1fr 600px;
  `}
`;

export const FormContainer = styled.form`
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  padding: 48px 16px;

  /* ${respondTo('medium')`
    padding: 48px;
  `} */

  background-color: ${({ theme }) => theme.colors.white};
`;

export const ButtonForm = styled(Button)`
  color: #FFF;
  max-width: 400px;
  width: 100%;

  min-height: 48px;

  font-size: 22px;
  padding: 16px;

  margin-top: 16px;

  &[disabled] {
    background: #ccc;
    cursor: default;
  }

  .loader {
    color: #fff;
    width: 4px;
    aspect-ratio: 1;
    border-radius: 50%;
    box-shadow: 19px 0 0 7px, 38px 0 0 3px, 57px 0 0 0;
    transform: translateX(-38px);
    animation: l21 .5s infinite alternate linear;
  }

  @keyframes l21 {
    50%  {box-shadow: 19px 0 0 3px, 38px 0 0 7px, 57px 0 0 3px}
    100% {box-shadow: 19px 0 0 0  , 38px 0 0 3px, 57px 0 0 7px}
  }
`;

export const RowContainer = styled.div`
  width: 100%;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray.light};

  display: grid;

  /* ${respondTo('medium')`
    display: flex;
  `} */

  & > div {
    min-width: 168px;
  }

  & > div:first-of-type {
    ${({ $flex }) => $flex && 'flex: 2;'}
  }

  & > div:not(:first-of-type) {
    border-radius: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.gray.light};
    /* ${respondTo('medium')`
      border: none;
      border-left: 1px solid #E6E6E6;
    `} */
  }

  & > div {
    border: none;

    ${({ $flex }) => $flex && 'flex: 1;'}
  }

  
`;