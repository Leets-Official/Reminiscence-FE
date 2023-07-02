import SignUpInput from '../../component/SignUpInput';
import * as S from './SignUp.styled';
import { SIGNUP_FORMAT, TITLE } from '../../constants';
import { useState } from 'react';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const isFilled = email.length && password.length && birthday.length;

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleBirthdayChange = (event) => {
    setBirthday(event.target.value);
  };

  return (
    <S.MainConatiner>
      <S.Section>
        <S.Logo>Reminiscence</S.Logo>
        <S.Inputs>
          {SIGNUP_FORMAT.map(({ title, type, placeholder }) => (
            <SignUpInput
              key={title}
              title={title}
              type={type}
              placeholder={placeholder}
              value={
                (title === TITLE.EMAIL && email) ||
                (title === TITLE.PASSWORD && password) ||
                birthday
              }
              onChange={
                (title === TITLE.EMAIL && handleEmailChange) ||
                (title === TITLE.PASSWORD && handlePasswordChange) ||
                handleBirthdayChange
              }
            />
          ))}
          <S.ButtonContainer>
            {isFilled ? (
              <S.NextButton to='/NickName' isFilled={isFilled}>
                다음으로
              </S.NextButton>
            ) : (
              <S.NextButton
                to='/NickName'
                isFilled={isFilled}
                onClick={(e) => e.preventDefault()}
              >
                다음으로
              </S.NextButton>
            )}
          </S.ButtonContainer>
        </S.Inputs>
      </S.Section>
    </S.MainConatiner>
  );
}
