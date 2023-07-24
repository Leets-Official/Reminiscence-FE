import * as S from './SignUpInput.styled';

export default function SignUpInput({
  title,
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <S.InputContainer value={value} onChange={onChange}>
      <S.Title>{title}</S.Title>
      <S.Input type={type} placeholder={placeholder} />
    </S.InputContainer>
  );
}
