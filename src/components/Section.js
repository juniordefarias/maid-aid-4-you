import styled from 'styled-components';

export default styled.section`
  /* max-width: 960px;
  width: calc(100% - 40px); */
  max-width: 1200px;
  width: calc(100% - 32px);
  margin: auto;

  padding-top: ${({ $paddingTop }) => $paddingTop}px;
  padding-bottom: ${({ $paddingBottom }) => $paddingBottom}px;

  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;