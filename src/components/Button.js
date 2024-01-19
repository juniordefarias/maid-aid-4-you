import styled from 'styled-components';

export default styled.button`
display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;

  background-color: ${({ theme }) => theme.colors.primary.main};
  color: #F8D3C9;
  font-size: 18px;
  font-weight: 700;
  line-height: 16px;
`;
