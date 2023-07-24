import * as S from './Main.styled';
import { SIGN_UP, LOGIN } from '../../constants';

function Main() {
  return (
    <S.MainConatiner>
      <S.Section>
        <S.Logo>Reminiscence</S.Logo>
        <S.ButtonContainer>
          <S.LinkButton to={SIGN_UP}>회원가입하기</S.LinkButton>
          <S.LinkButton to={LOGIN}>로그인하기</S.LinkButton>
        </S.ButtonContainer>
      </S.Section>
    </S.MainConatiner>
  );
}

export default Main;
