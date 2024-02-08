import styled from 'styled-components';
import { animated } from 'react-spring';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* display: flex;
  justify-content: center;
  align-items: center; */

  z-index: 1000;
`;

export const Container = styled(animated.div)`
  position: fixed;
  z-index: 100000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  width: calc(100% - 48px);
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;

  padding: 54px 24px 42px;

  border-radius: 8px;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  h3 {
    font-size: 28px;
    text-align: center;
    margin-bottom: 12px;
  }

  p {
    text-align: center;
    font-size: 18px;

    opacity: 0.75;
  }

  button {
    position: absolute;
    top: 16px;
    right: 16px;

    width: 18px;
    height: 18px;

    svg {
      path {
        /* fill: ${({ theme }) => theme.colors.primary.main}; */
        fill: #2ECC71;
      }
    }
  }
`;

/* export const Container = styled(animated.div)`
  position: fixed;
  z-index: 100000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  width: calc(100% - 48px);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;

  padding: 56px 16px 64px ;

  border-radius: 8px;

  background-color: #fff;

  display: flex;
  gap: 16px;

  svg {
    flex: 1;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 6px;

    max-width: ${() => (
      window.innerWidth <= 392
        ? window.innerWidth - 120
        : window.innerWidth - 48 - 38 - 18 - 16
    )}px;
  }

  p {
    font-size: 14px;
    line-height: 17px;
  }

  button {
    position: absolute;
    top: 16px;
    right: 16px;

    width: 18px;
    height: 18px;

    svg {
      path {
        fill: ${({ theme }) => theme.colors.primary.main};
      }
    }
  }
`; */