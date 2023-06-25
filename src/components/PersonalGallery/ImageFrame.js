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

export default function ImageFrame() {
  return (
    <FrameDiv>
      <StyledFrame></StyledFrame>
    </FrameDiv>
  );
}
