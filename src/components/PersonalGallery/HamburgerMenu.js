// HamburgerMenu.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const MenuContainer = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 400px;
  height: 500px;
  background-color: white;
  display: ${(props) => (props['data-isopen'] ? 'block' : 'none')};
  z-index: 1;
  user-select: none;
`;

const MenuContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid gray;
  border-radius: 5px;
  color: gray;
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: gray;
`;

const PlaceholderText = styled.span`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: gray;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`;

const HamburgerMenu = ({ isOpen }) => {
  const [isPlaceholderVisible, setPlaceholderVisible] = useState(true);

  const handleSearchClick = () => {
    setPlaceholderVisible(false);
  };

  return (
    <MenuContainer data-isopen={isOpen}>
      <MenuContentWrapper>
        <h3>로고</h3>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder={isPlaceholderVisible ? 'Searching for Photographer ID' : ''}
            onClick={handleSearchClick}
          />
          <SearchIcon />
          {isPlaceholderVisible && <PlaceholderText></PlaceholderText>}
        </SearchContainer>
        <p>사진 추가</p>
        <p>사진 삭제</p>
        <p>로그아웃</p>
      </MenuContentWrapper>
    </MenuContainer>
  );
};

export default HamburgerMenu;
