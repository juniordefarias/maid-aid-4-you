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

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  label {
    display: flex;
    gap: 12px;

    align-items: center;
  }

  input[type="checkbox"] {
    //display: none;

    width: 18px;
    height: 18px;
  }

  input[type="checkbox"]:checked + label {
    background-color: ${({ theme }) => theme.colors.primary.main};
  }

  span {
    display: inline-block;
    width: 100%;
    min-height: 20px;
    cursor: pointer;
  }
  
`;