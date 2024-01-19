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
  gap: 8px;

  @media (min-width: 768px) {
    grid-template-columns: ${({ $optionsLenght }) => $optionsLenght > 2 ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)'}; 

    grid-template-columns: ${({ $optionsLenght }) => $optionsLenght === 4 && 'repeat(4, 1fr)'}; 
  }

  & > * {
    flex: 1;
  }

  div {
    min-height: 52px;
    display: flex;
  }

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + label {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary.main};
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  label {
    //height: 52px;
    padding: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    flex: 1 0 0;

    border-radius: 8px;
    border: 1px solid var(--Gray, #E6E6E6);
    background: #FFF;

    cursor: pointer;
  }
`;