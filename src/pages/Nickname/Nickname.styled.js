import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

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

export const Inputs = styled.div`
  margin-top: 40px;
`;

export const NextButton = styled(Link)`
  font-size: 24px;
  font-family: K2D, sans-serif;
  font-weight: 700;

  width: 300px;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: 1px solid #f0f0f0;
  background: ${({ isFilled }) => (isFilled ? '#fff0a4' : 'gray')};

  text-decoration: none;
  color: black;
  cursor: ${({ isFilled }) => (isFilled ? 'pointer' : 'not-allowed')};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
