import React, { useState } from 'react';
import ImageSlide from './Components/ImageSlide';
import HamburgerIcon from './Components/HamburgerIcon';
import HamburgerMenu from './Components/HamburgerMenu';
import LightingEffect from './Components/LightingEffect';
import * as S from './PersonalGallery.styled';

export default function PersonalGallery() {
  const [sideNav, setSideNav] = useState(false);

  const toggleMenu = () => {
    setSideNav(!sideNav);
  };

  return (
    <div>
      <S.GlobalStyle />
      <ImageSlide />
      <HamburgerIcon isopen={sideNav} onClick={toggleMenu} />
      <HamburgerMenu isopenit={sideNav} />
      <LightingEffect />
    </div>
  );
}
