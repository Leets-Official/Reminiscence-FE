export const TITLE = {
  EMAIL: 'E-mail',
  PASSWORD: 'Password',
  BIRTHDAY: 'Birthday',
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
