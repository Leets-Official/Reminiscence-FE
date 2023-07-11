// HamburgerIcon.js
import styled from 'styled-components';
import React from 'react';

const HamburgerBar = styled.div`
  width: 24px;
  height: 3px;
  background-color: white;
  margin: 2.5px;
  transition: 300ms ease-in-out;

  &.sidenav1 {
    transform: translateY(5.5px);
    opacity: 0;
    transition: 150ms ease-in-out;
  }

  &.sidenav2 {
    transform: translateY(4.35px) rotateZ(45deg);
    transition: 300ms ease-in-out;
    background-color: black;
    z-index: 2;
  }

  &.sidenav3 {
    transform: translateY(-3.3px) rotateZ(-45deg);
    transition: 300ms ease-in-out;
    background-color: black;
    z-index: 2;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 6px;
  cursor: pointer;
  z-index: 2;
  pointer-events: ${(props) => (props.disableClick ? 'none' : 'auto')};
`;

const HamburgerIcon = ({ isOpen, onClick, disableClick }) => {
  const handleClick = () => {
    if (!disableClick) {
      onClick();
    }
  };

  return (
    <Container disableClick={disableClick} onClick={handleClick}>
      <HamburgerBar className={isOpen ? 'sidenav1' : ''} />
      <HamburgerBar className={isOpen ? 'sidenav2' : ''} />
      <HamburgerBar className={isOpen ? 'sidenav3' : ''} />
    </Container>
  );
};

export default HamburgerIcon;
