import * as S from './NickName.styled';
import { useState } from 'react';
import { NICKNAME_FORMAT, TITLE, HOME } from '../../constants';
import SignUpInput from '../../component/SignUpInput';
import { useDispatch } from 'react-redux';
import { register2 } from '../../store/registerSlice';

export default function NickName() {
  const [id, setId] = useState('');
  const [nickname, setNickname] = useState('');
  const isFilled = id.length && nickname.length;
  const dispatch = useDispatch();

  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };
  const saveInfo = () => {
    // TODO: API 연결
    // 회원가입 시에는 전역 상태 데이터 초기화 => 로그인 시 다시 fetch
    dispatch(register2({ id, nickname }));
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
              <S.NextButton to={HOME} isfilled={isFilled} onClick={saveInfo}>
                다음으로
              </S.NextButton>
            ) : (
              <S.NextButton
                to={HOME}
                isfilled={isFilled}
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
