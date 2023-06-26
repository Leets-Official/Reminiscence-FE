import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImageFrame from "./ImageFrame";
import TextFrame from "./TextFrame";

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
`;

export default function ImageSlide() {
  const [imageData, setImageData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = async (id) => {
    try {
      const response = await fetch(`/api/images/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const { imageUrl, date, caption, photographer } = await response.json();
      setImageData({ id, imageUrl, date, caption, photographer });
    } catch (error) {
      console.log(error);
    }
  };

  const handleArrow1Click = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      fetchData(imageData[newIndex].id);
    }
  };

  const handleArrow2Click = () => {
    if (currentIndex < imageData.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      fetchData(imageData[newIndex].id);
    }
  };

  return (
    <div>
      <LeftDiv>
        <Arrow1 onClick={handleArrow1Click} />
      </LeftDiv>
      <RightDiv>
        <Arrow2 onClick={handleArrow2Click} />
      </RightDiv>
      <ImageFrame imageUrl={imageData.imageUrl} caption={imageData.caption} />
      <TextFrame date={imageData.date} photographer={imageData.photographer} />
    </div>
  );
}
