import http from './core';

export const postSignUp = ({ birthday, password, email, id, nickname }) =>
  http.post({
    url: '/sign-up',
    data: { birthday, password, email, id, nickname },
  });
