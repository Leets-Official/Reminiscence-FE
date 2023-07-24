export const TITLE = {
  EMAIL: 'E-mail',
  PASSWORD: 'Password',
  BIRTHDAY: 'Birthday',
  ID: 'Reminiscence에서 검색될 Photographer ID를 입력해주세요',
  NICKNAME: 'Reminiscence에서 보여질 닉네임을 입력해주세요',
};

export const SIGNUP_FORMAT = [
  { title: TITLE.EMAIL, type: 'email', placeholder: 'E-mail을 입력해주세요.' },
  {
    title: TITLE.PASSWORD,
    type: 'password',
    placeholder: '비밀번호를 입력해주세요.',
  },
  {
    title: TITLE.BIRTHDAY,
    type: 'text',
    placeholder: '생년월일 6글자를 입력해주세요. ex) 030211',
  },
];

export const NICKNAME_FORMAT = [
  {
    title: TITLE.ID,
    type: 'text',
    placeholder: 'Photographer ID를 입력해주세요. (소문자, 숫자만)',
  },
  {
    title: TITLE.NICKNAME,
    type: 'text',
    placeholder: '닉네임을 입력해주세요. (영어, 한글만)',
  },
];
