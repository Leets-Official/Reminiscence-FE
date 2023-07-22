import React from 'react';
import * as S from './Home.styled';

function Home() {
  return (
    <S.HomeStyle>
      <S.LinkContainer to="images/1">Personal Gallery로 이동</S.LinkContainer>
    </S.HomeStyle>
  );
}

export default Home;
