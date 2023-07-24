import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 480px;
  background-color: white;
  display: ${(props) => (props.isopen ? 'block' : 'none')};
  z-index: 1;
  user-select: none;
  font-family: Pacifico, cursive;
  font-weight: 40px;
`;

export const MenuContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 50px;
  margin-top: 20px;
`;

export const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 12px;
  border: 1px solid gray;
  border-radius: 5px;
  color: gray;
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: gray;
`;

export const TextContainer = styled.p`
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 25px;
  font-family: Pacifico, cursive;
  font-weight: 50px;
`;

export const LogoContainer = styled(Link)`
  font-size: 30px;
  margin-bottom: 25px;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

export const LogoutContainer = styled.p`
  font-size: 10px;
  cursor: pointer;
  margin-top: 60px;
`;
