import React from "react";
import styled from "styled-components";

const LeftDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 1.5%;
  transform: translate(-50%, -50%);
`;

const RightDiv = styled.div`
  position: fixed;
  top: 50%;
  right: 1.11%;
  transform: translate(-50%, -50%);
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
  return (
    <div>
      <LeftDiv>
        <Arrow1 />
      </LeftDiv>
      <RightDiv>
        <Arrow2 />
      </RightDiv>
    </div>
  );
}
