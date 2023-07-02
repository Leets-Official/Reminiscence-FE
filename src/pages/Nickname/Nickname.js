import * as S from './Nickname.styled';
import { useState } from 'react';
import { NICKNAME_FORMAT, TITLE } from '../../constants';
import SignUpInput from '../../component/SignUpInput';

export default function NickName() {
  const [id, setId] = useState('');
  const [nickname, setNickname] = useState('');
  const isFilled = id.length && nickname.length;

  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  return (
    <S.MainConatiner>
      <S.Section>
        <S.Logo>Reminiscence</S.Logo>
        <S.Inputs>
          {NICKNAME_FORMAT.map(({ title, type, placeholder }) => (
            <SignUpInput
              key={title}
              title={title}
              type={type}
              placeholder={placeholder}
              value={title === TITLE.ID ? id : nickname}
              onChange={
                title === TITLE.ID ? handleIdChange : handleNicknameChange
              }
            />
          ))}
          <S.ButtonContainer>
            {isFilled ? (
              <S.NextButton to='/' isFilled={isFilled}>
                다음으로
              </S.NextButton>
            ) : (
              <S.NextButton
                to='/'
                isFilled={isFilled}
                onClick={(e) => e.preventDefault()}
              >
                시작하기
              </S.NextButton>
            )}
          </S.ButtonContainer>
        </S.Inputs>
      </S.Section>
    </S.MainConatiner>
  );
}
