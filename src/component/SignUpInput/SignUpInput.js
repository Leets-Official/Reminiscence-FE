import * as S from './SignUpInput.styled';

export default function SignUpInput({ title, type, placeholder }) {
  return (
    <S.InputContainer>
      <S.Title>{title}</S.Title>
      <S.Input type={type} placeholder={placeholder} />
    </S.InputContainer>
  );
}
