import { styled } from 'styled-components';

export const MainConatiner = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.section`
  width: 700px;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 100px;
  font-family: Pacifico, cursive;
  font-weight: 400;

  color: white;
`;

export const LoginContainer = styled.div`
  width: 230px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 117px;
`;

export const LoginButtonContainer = styled.div`
  width: 100%;
  height: 71px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 23px;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  border-radius: 20px;

  cursor: pointer;
`;

export const LoginButton = styled.button`
  font-size: 17px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;

  margin-left: 6px;
  color: inherit;

  background: inherit;
  text-decoration: none;

  border-radius: 20px;
  border: none;
`;
