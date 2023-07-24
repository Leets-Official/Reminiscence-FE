import React, { useState, useEffect } from 'react';
import * as S from './ImageSlide.styled';
import ImageFrame from '../ImageFrame';
import TextFrame from '../TextFrame';

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

  // useEffect(() => {
  //   const fetchImageDataLength = async () => {
  //     try {
  //       const response = await fetch('https://localhost:3000/images/length');
  //       if (response.ok) {
  //         const data = await response.json();
  //         setImageDataLength(data.length);
  //       }
  //     } catch (error) {
  //       throw Error;
  //     }
  //   };

  //   fetchImageDataLength();
  // }, []);

  // useEffect(() => {
  //   const fetchImageData = async () => {
  //     try {
  //       const id = currentIndex;
  //       const response = await fetch(`https://localhost:3000/images/${id}`);
  //       if (response.ok) {
  //         const imageData = await response.json();
  //         setCurrentImageData(imageData);
  //       }
  //     } catch (error) {
  //       throw Error('이미지 데이터를 불러오는 데 실패했습니다');
  //     }
  //   };

  //   fetchImageData();
  // }, [currentIndex]);

  if (!currentImageData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <S.LeftDiv>
        <S.Arrow1 onClick={handleArrow1Click} disabled={currentIndex === 1} />
      </S.LeftDiv>
      <S.RightDiv>
        <S.Arrow2 onClick={handleArrow2Click} disabled={currentIndex === imageDataLength} />
      </S.RightDiv>
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
