import { TITLE } from './signUpFormat';

export const LOGIN_FORMAT = [
  { title: TITLE.EMAIL, type: 'email', placeholder: 'E-mail을 입력해주세요.' },
  {
    title: TITLE.PASSWORD,
    type: 'password',
    placeholder: '비밀번호를 입력해주세요.',
  },
];

export const INITAIL_STATE = {
  email: '',
  birthday: '',
  id: '',
  nickname: '',
};
