import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 100px;
`;

export const LinkButton = styled(Link)`
  font-size: 24px;
  font-family: K2D, sans-serif;
  font-weight: 700;

  width: 230px;
  height: 71px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  border: 1px solid #f0f0f0;
  background: #fff0a4;

  text-decoration: none;
  color: black;
  cursor: pointer;

  margin-bottom: 20px;
`;
