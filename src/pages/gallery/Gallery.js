import React, { useState } from 'react';
import ImageSlide from '../../components/ImageSlide';
import HamburgerIcon from '../../components/Hamburger/HamburgerIcon';
import HamburgerMenu from '../../components/Hamburger/HamburgerMenu';
import LightingEffect from '../../components/LightingEffect';

function Gallery() {
  const [sideNav, setSideNav] = useState(false);

  const toggleMenu = () => {
    setSideNav(!sideNav);
  };

  return (
    <div>
      <ImageSlide />
      <HamburgerIcon isopen={sideNav} onClick={toggleMenu} />
      <HamburgerMenu isopen={sideNav} />
      <LightingEffect />
    </div>
  );
}

export default Gallery;
