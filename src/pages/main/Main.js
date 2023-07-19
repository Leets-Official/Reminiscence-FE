import * as S from './Main.styled';

export default function Main() {
  return (
    <S.MainConatiner>
      <S.Section>
        <S.Logo>Reminiscence</S.Logo>
        <S.ButtonContainer>
          <S.LinkButton to='/SignUp'>회원가입하기</S.LinkButton>
          <S.LinkButton to='/Login'>로그인하기</S.LinkButton>
        </S.ButtonContainer>
      </S.Section>
    </S.MainConatiner>
  );
}
