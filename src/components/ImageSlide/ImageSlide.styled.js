import styled from 'styled-components';

export const LeftDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 1.5%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const RightDiv = styled.div`
  position: fixed;
  top: 50%;
  right: 1.11%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const Arrow1 = styled.div`
  cursor: pointer;
  position: relative;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  border-left: 3px solid white;
  border-top: none;
  border-right: none;
  border-bottom: 3px solid white;
  opacity: ${(props) => (props.disabled ? '0.2' : '1')};
`;

export const Arrow2 = styled.div`
  cursor: pointer;
  position: relative;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  border-left: none;
  border-top: 3px solid white;
  border-right: 3px solid white;
  border-bottom: none;
  opacity: ${(props) => (props.disabled ? '0.2' : '1')};
`;
