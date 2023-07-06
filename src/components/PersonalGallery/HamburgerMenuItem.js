import React from 'react';
import styled from 'styled-components';

const MenuItem = styled.p`
  margin: 10px;
  font-size: 16px;
  color: black;
`;

const HamburgerMenuItem = ({ text }) => {
  return <MenuItem>{text}</MenuItem>;
};

export default HamburgerMenuItem;
