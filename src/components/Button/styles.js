import styled from 'styled-components';

export const Container = styled.button`
  // display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;

  background-color: ${({ theme }) => theme.colors.primary.main};
  color: #FFF;
  font-size: 18px;
  font-weight: 700;
  line-height: 16px;

  transition: transform 0.3s ease;
  &:not([disabled]):hover {
    transform: translateY(-5px);
  }
  &:not([disabled]):active {
    transform: translateY(0);
  }
`;
