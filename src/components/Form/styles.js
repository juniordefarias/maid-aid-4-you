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

export const Container = styled.form`
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  padding: 48px 16px;

  ${respondTo('medium')`
    padding: 48px;
  `}

  background-color: ${({ theme }) => theme.colors.white};

  h2 {
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 110%;

    text-align: center;

    color: ${({ theme }) => theme.colors.primary.main};

    margin-bottom: 32px;
  }
`;

export const ButtonForm = styled(Button)`
  color: #FFF;
  max-width: 400px;
  width: 100%;

  font-size: 22px;
  padding: 16px;

  margin-top: 16px;
`;

export const RowContainer = styled.div`
  width: 100%;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray.light};

  display: grid;

  ${respondTo('medium')`
    display: flex;
  `}

  & > div:first-of-type {
    ${({ $flex }) => $flex && 'flex: 2;'}
  }

  & > div:not(:first-of-type) {
    border-radius: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.gray.light};
    ${respondTo('medium')`
      border: none;
      border-left: 1px solid #E6E6E6;
    `}
  }

  & > div {
    border: none;

    ${({ $flex }) => $flex && 'flex: 1;'}
  }

  
`;