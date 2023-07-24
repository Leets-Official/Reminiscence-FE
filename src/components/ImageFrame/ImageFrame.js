import React from 'react';
import * as S from './ImageFrame.styled';

export default function ImageFrame({ imageUrl, caption }) {
  return (
    <S.FrameDiv>
      <S.StyledFrame>
        <S.Image src={imageUrl} alt={caption || '이미지 설정이 없습니다.'} />
      </S.StyledFrame>
    </S.FrameDiv>
  );
}
