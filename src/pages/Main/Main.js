import * as S from './Main.styled';

export default function Main() {
  return (
    <S.MainConatiner>
      <S.Section>
        <S.Logo>Reminiscence</S.Logo>
        <S.SignUpButton href='/Login'>회원가입하기</S.SignUpButton>
      </S.Section>
    </S.MainConatiner>
  );
}
