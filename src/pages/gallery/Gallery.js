import React, { useState } from 'react';
import ImageSlide from '../../components/ImageSlide';
import HamburgerIcon from '../../components/Hamburger/HamburgerIcon';
import HamburgerMenu from '../../components/Hamburger/HamburgerMenu';
import LightingEffect from '../../components/LightingEffect';

function Gallery() {
  const [showNav, setShowNav] = useState(false);

  const toggleMenu = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      <ImageSlide />
      <HamburgerIcon isopen={showNav} onClick={toggleMenu} />
      <HamburgerMenu isopen={showNav} />
      <LightingEffect />
    </div>
  );
}

export default Gallery;
