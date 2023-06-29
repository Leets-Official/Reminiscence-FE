import SignUpInput from '../../component/SignUpInput';
import * as S from './SignUp.styled';

const signUpFormat = [
  { title: 'E-mail', type: 'email', placeholder: 'E-mail을 입력해주세요.' },
  {
    title: 'Password',
    type: 'password',
    placeholder: '비밀번호를 입력해주세요.',
  },
  {
    title: 'Birthday',
    type: 'text',
    placeholder: '생년월일 6글자를 입력해주세요. ex) 030211',
  },
];

export default function SignUp() {
  return (
    <S.MainConatiner>
      <S.Section>
        <S.Logo>Reminiscence</S.Logo>
        <S.Inputs>
          {signUpFormat.map(({ title, type, placeholder }) => (
            <SignUpInput
              key={title}
              title={title}
              type={type}
              placeholder={placeholder}
            />
          ))}
          <S.ButtonContainer>
            <S.NextButton to='SignUpNext'>다음으로</S.NextButton>
          </S.ButtonContainer>
        </S.Inputs>
      </S.Section>
    </S.MainConatiner>
  );
}
