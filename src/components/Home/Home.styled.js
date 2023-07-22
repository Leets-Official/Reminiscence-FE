import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

export const LinkContainer = styled(Link)`
  font-size: 24px;
  font-weight: 700;

  width: 300px;
  height: 71px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  border: 1px solid gray;
  background: white;

  text-decoration: none;
  color: black;
  cursor: pointer;
  position: relative;
`;
