import React from 'react';
import * as S from './TextFrame.styled';

export default function TextFrame({ date, photographer, caption, sns }) {
  return (
    <S.FrameText>
      <S.StyledText>
        <S.TextWrapper>
          <S.TitleWrapper>
            Date : <S.ContentsWrapper>{date}</S.ContentsWrapper>
          </S.TitleWrapper>
        </S.TextWrapper>
        <S.TextWrapper>
          <S.TitleWrapper>
            PhotoGrapher : <S.ContentsWrapper>{photographer}</S.ContentsWrapper>
          </S.TitleWrapper>
        </S.TextWrapper>
        <S.TextWrapper>
          <S.TitleWrapper>
            Caption : <S.ContentsWrapper>{caption}</S.ContentsWrapper>
          </S.TitleWrapper>
        </S.TextWrapper>
        <S.TextWrapper>
          <S.TitleWrapper>
            SNS : <S.ContentsWrapper>{sns}</S.ContentsWrapper>
          </S.TitleWrapper>
        </S.TextWrapper>
      </S.StyledText>
    </S.FrameText>
  );
}
