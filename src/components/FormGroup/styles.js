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
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: 16px;
  padding: 16px;

  display: grid;
  /* gap: 8px; */ gap: 16px;
  

  width: 100%;

  /* & > div { */ #labelContainer {
    display: flex;
    align-items: center;
    gap: 12px;

    label {
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
    }
  }

  input, textarea {
    border: none;
    outline: none;
    width: 100%;

    font-size: 18px;
    font-style: normal;
    font-weight: 300;
  }

  textarea {
    min-height: 120px;
  }

  select {
    border: none;
    outline: none;

    font-size: 14px;
  }
`;

