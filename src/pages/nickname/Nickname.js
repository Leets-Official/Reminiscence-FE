import * as S from './NickName.styled';
import { useState } from 'react';
import { NICKNAME_FORMAT, TITLE, HOME, LOGIN, USER } from '../../constants';
import SignUpInput from '../../components/SignUpInput';
import { useSelector } from 'react-redux';
import * as api from '../../api';

function NickName() {
  const [id, setId] = useState('');
  const [nickname, setNickname] = useState('');
  const isFilled = id.length && nickname.length;
  const { birthday, password, email } = useSelector((state) => state.register);

  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };
  const saveInfo = async () => {
    try {
      await api.postSignUp({ birthday, password, email, id, nickname });
      window.location.href = LOGIN;
    } catch (error) {
      throw error;
    }
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
              onChange={title === TITLE.ID ? handleIdChange : handleNicknameChange}
            />
          ))}
          <S.ButtonContainer>
            {isFilled ? (
              <S.NextButton to={HOME} isfilled={isFilled} onClick={saveInfo}>
                다음으로
              </S.NextButton>
            ) : (
              <S.NextButton to={HOME} isfilled={isFilled} onClick={(e) => e.preventDefault()}>
                시작하기
              </S.NextButton>
            )}
          </S.ButtonContainer>
        </S.Inputs>
      </S.Section>
    </S.MainConatiner>
  );
}

export default NickName;
