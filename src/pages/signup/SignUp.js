import SignUpInput from '../../components/SignUpInput';
import * as S from './SignUp.styled';
import { SIGNUP_FORMAT, TITLE, NICKNAME } from '../../constants';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register1 } from '../../store/registerSlice';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const isFilled = email.length && password.length && birthday.length;
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleBirthdayChange = (event) => {
    setBirthday(event.target.value);
  };
  const saveInfo = () => {
    dispatch(register1({ email, password, birthday }));
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
              value={(title === TITLE.EMAIL && email) || (title === TITLE.PASSWORD && password) || birthday}
              onChange={
                (title === TITLE.EMAIL && handleEmailChange) ||
                (title === TITLE.PASSWORD && handlePasswordChange) ||
                handleBirthdayChange
              }
            />
          ))}
          <S.ButtonContainer>
            {isFilled ? (
              <S.NextButton to={NICKNAME} isfilled={isFilled} onClick={saveInfo}>
                다음으로
              </S.NextButton>
            ) : (
              <S.NextButton to={NICKNAME} isfilled={isFilled} onClick={(e) => e.preventDefault()}>
                다음으로
              </S.NextButton>
            )}
          </S.ButtonContainer>
        </S.Inputs>
      </S.Section>
    </S.MainConatiner>
  );
}

export default SignUp;
