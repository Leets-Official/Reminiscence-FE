// HamburgerMenu.js
import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 280px;
  height: 300px;
  background-color: white;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  z-index: 1;
`;

const HamburgerMenu = ({ isOpen }) => {
  return <MenuContainer isOpen={isOpen} />;
};

export default HamburgerMenu;
