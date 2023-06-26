// ImageFrame.js
import React from "react";
import styled from "styled-components";

const FrameDiv = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledFrame = styled.div`
  width: 380px;
  height: 380px;
  border: 10px solid #473004;
  background: #d9d9d9;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export default function ImageFrame({ imageUrl, caption }) {
  return (
    <FrameDiv>
      <StyledFrame>
        <Image src={imageUrl} alt={caption} />
      </StyledFrame>
    </FrameDiv>
  );
}
