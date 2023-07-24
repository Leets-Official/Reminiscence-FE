import React from 'react';
import * as S from './HamburgerIcon.styled';

const HamburgerIcon = ({ isopen, onClick, disableClick }) => {
  const handleClick = () => {
    if (!disableClick) {
      onClick();
    }
  };

  return (
    <S.Container disableClick={disableClick} onClick={handleClick}>
      <S.HamburgerBar className={isopen ? 'sidenav1' : ''} />
      <S.HamburgerBar className={isopen ? 'sidenav2' : ''} />
      <S.HamburgerBar className={isopen ? 'sidenav3' : ''} />
    </S.Container>
  );
};

export default HamburgerIcon;
