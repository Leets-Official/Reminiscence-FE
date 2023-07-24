import * as S from './Login.styled';
import { LOGIN_FORMAT, TITLE } from '../../constants';
import SignUpInput from '../../component/SignUpInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/userSlice';
import { HOME } from '../../constants/route';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isFilled = email.length && password.length;
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const saveInfo = () => {
    // TODO: API 연결하여 유저 데이터 페치
    dispatch(login({ email, password }));
  };

  return (
    <S.MainConatiner>
      <S.Section>
        <S.Logo>Reminiscence</S.Logo>
        <S.Inputs>
          {LOGIN_FORMAT.map(({ title, type, placeholder }) => (
            <SignUpInput
              key={title}
              title={title}
              type={type}
              placeholder={placeholder}
              value={title === TITLE.EMAIL ? email : password}
              onChange={
                title === TITLE.EMAIL ? handleEmailChange : handlePasswordChange
              }
            />
          ))}
          <S.ButtonContainer>
            {isFilled ? (
              <S.NextButton to={HOME} isfilled={isFilled} onClick={saveInfo}>
                로그인
              </S.NextButton>
            ) : (
              <S.NextButton
                to={HOME}
                isfilled={isFilled}
                onClick={(e) => e.preventDefault()}
              >
                로그인
              </S.NextButton>
            )}
          </S.ButtonContainer>
        </S.Inputs>
      </S.Section>
    </S.MainConatiner>
  );
}
