import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import ImageSlide from './ImageSlide';
import HamburgerIcon from './HamburgerIcon';
import HamburgerMenu from './HamburgerMenu';
import LightingEffect from './LightingEffect';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    overflow:hidden;
  }
`;

export default function PersonalGallery() {
  const [sideNav, setSideNav] = useState(false);

  const toggleMenu = () => {
    setSideNav(!sideNav);
  };

  return (
    <div>
      <GlobalStyle />
      <ImageSlide />
      <HamburgerIcon isopen={sideNav} onClick={toggleMenu} />
      <HamburgerMenu isopenit={sideNav} />
      <LightingEffect />
    </div>
  );
}
