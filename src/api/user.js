import http from './core';

export const postSignUp = ({ email, password, nickanme, birthday, photographerId }) =>
  http.post({
    url: '/sign-up',
    body: { email, password, nickanme, birthday, photographerId },
  });
