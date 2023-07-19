import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageFrame from './ImageFrame';
import TextFrame from './TextFrame';

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
  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentImageData, setCurrentImageData] = useState({});
  const [imageDataLength, setImageDataLength] = useState(0);

  const handleArrow1Click = () => {
    if (currentIndex > 1) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
    }
  };

  const handleArrow2Click = () => {
    if (currentIndex < imageDataLength) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    // Fetch the image data length from the server
    const fetchImageDataLength = async () => {
      try {
        const response = await fetch('https://localhost:3000/api/images/length');
        if (response.ok) {
          const data = await response.json();
          setImageDataLength(data.length);
        } else {
          console.log('Failed to fetch image data length', response.status, response.statusText);
        }
      } catch (error) {
        console.log('Error occurred while fetching image data length', error);
      }
    };

    fetchImageDataLength();
  }, []);

  useEffect(() => {
    // Fetch the image data from the server using MSW
    const fetchImageData = async () => {
      try {
        const id = currentIndex;
        const response = await fetch(`https://localhost:3000/api/images/${id}`);
        if (response.ok) {
          const imageData = await response.json();
          setCurrentImageData(imageData);
        } else {
          console.log('Failed to fetch image data', response.status, response.statusText);
        }
      } catch (error) {
        console.log('Error occurred while fetching image data', error);
      }
    };

    fetchImageData();
  }, [currentIndex]);

  if (!currentImageData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <LeftDiv>
        <Arrow1 onClick={handleArrow1Click} disabled={currentIndex === 1} />
      </LeftDiv>
      <RightDiv>
        <Arrow2 onClick={handleArrow2Click} disabled={currentIndex === imageDataLength} />
      </RightDiv>
      <ImageFrame imageUrl={currentImageData.imageUrl} />
      <TextFrame
        date={currentImageData.date}
        photographer={currentImageData.photographer}
        caption={currentImageData.caption}
        sns={currentImageData.sns}
      />
    </div>
  );
}
