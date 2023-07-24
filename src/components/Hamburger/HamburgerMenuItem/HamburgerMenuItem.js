import React from 'react';
import * as S from './HamburgerMenuItem.styled';

const HamburgerMenuItem = ({ text }) => {
  return <S.MenuItem>{text}</S.MenuItem>;
};

export default HamburgerMenuItem;
