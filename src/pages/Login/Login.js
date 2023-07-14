import * as S from './Login.styled';
import { LOGIN_FORMAT } from '../../constants/login';

export default function Login() {
  return (
    <S.MainConatiner>
      <S.Section>
        <S.Logo>Reminiscence</S.Logo>
        <S.LoginContainer>
          {LOGIN_FORMAT.map(
            ({ type, placeHolder, imageSrc, background, color }) => (
              <S.LoginButtonContainer background={background} color={color}>
                <img
                  src={imageSrc}
                  alt={type + '로그인 이미지'}
                  width='24'
                  height='24'
                />
                <S.LoginButton>{type + placeHolder}</S.LoginButton>
              </S.LoginButtonContainer>
            )
          )}
        </S.LoginContainer>
      </S.Section>
    </S.MainConatiner>
  );
}
