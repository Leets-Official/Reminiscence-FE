import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageFrame from './ImageFrame';
import TextFrame from './TextFrame';
import { ImageData } from '../../mocks/mockDatas/ImageData';

const LeftDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 1.5%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const RightDiv = styled.div`
  position: fixed;
  top: 50%;
  right: 1.11%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const Arrow1 = styled.div`
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

const Arrow2 = styled.div`
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

export default function ImageSlide() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrow1Click = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      console.log('next index = ' + newIndex);
    }
    console.log('Arrow1 is clicked.');
  };

  const handleArrow2Click = () => {
    if (currentIndex < ImageData.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      console.log('next index = ' + newIndex);
    }
    console.log('Arrow2 is clicked.');
  };

  const currentImageData = ImageData[currentIndex];

  return (
    <div>
      <LeftDiv>
        <Arrow1 onClick={handleArrow1Click} disabled={currentIndex === 0} />
      </LeftDiv>
      <RightDiv>
        <Arrow2 onClick={handleArrow2Click} disabled={currentIndex === ImageData.length - 1} />
      </RightDiv>
      <ImageFrame imageUrl={currentImageData.imageUrl} />
      <TextFrame
        date={currentImageData.date}
        photographer={currentImageData.photographer}
        caption={currentImageData.caption}
      />
    </div>
  );
}
