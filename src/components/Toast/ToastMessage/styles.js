import styled, { css } from "styled-components";

const containerVariants = {
  default: css`
    background-color: blue;
  `,
  success: css`
    //background-color: #7abf66;
    background-color: ${({ theme }) => theme.toast.success};
  `,
  danger: css`
    //background-color: #ff6464;
    background-color: ${({ theme }) => theme.toast.danger};
  `,
}

export const Container = styled.div`
  padding: 16px 23px;

  ${({ $type }) => containerVariants[$type] || containerVariants.default}

  color: ${({ theme }) => theme.colors.white};

  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  & + & {
    margin-top: 12px;
  }
  
  strong {
    line-height: 124%;
  }
`;