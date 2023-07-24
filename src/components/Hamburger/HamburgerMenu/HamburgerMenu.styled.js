import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 500px;
  background-color: white;
  display: ${(props) => (props.isopenit ? 'block' : 'none')};
  z-index: 1;
  user-select: none;
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
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 16px;
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
