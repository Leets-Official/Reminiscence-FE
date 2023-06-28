// TextFrame.js
import React from 'react';
import styled from 'styled-components';

const FrameText = styled.div`
  position: fixed;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledText = styled.div`
  width: 230px;
  height: 100px;
  border: 5px solid #684500;
  background: #ffffff;
`;

const TextWrapper = styled.div`
  text-align: center;
`;

const TitleWrapper = styled.span`
  font-weight: bold;
  font-family: 'Oswald', sans-serif;
`;

const ContentsWrapper = styled.span`
  font-weight: normal;
`;

export default function TextFrame({ date, photographer, caption }) {
  return (
    <FrameText>
      <StyledText>
        <TextWrapper>
          <TitleWrapper>
            Date : <ContentsWrapper>{date}</ContentsWrapper>
          </TitleWrapper>
        </TextWrapper>
        <TextWrapper>
          <TitleWrapper>
            PhotoGrapher : <ContentsWrapper>{photographer}</ContentsWrapper>
          </TitleWrapper>
        </TextWrapper>
        <TextWrapper>
          <TitleWrapper>
            Caption : <ContentsWrapper>{caption}</ContentsWrapper>
          </TitleWrapper>
        </TextWrapper>
      </StyledText>
    </FrameText>
  );
}
