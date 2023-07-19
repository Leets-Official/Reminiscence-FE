import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import AddPhoto from './AddPhoto';

const MenuContainer = styled.div`
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

const HamburgerMenu = ({ isopenit }) => {
  const [isPlaceholderVisible, setPlaceholderVisible] = useState(true);
  const [isAddPhotoVisible, setAddPhotoVisible] = useState(false);

  const handleSearchClick = () => {
    setPlaceholderVisible(false);
  };

  const handleAddPhotoClick = () => {
    setAddPhotoVisible(true);
  };

  const handleCloseAddPhoto = () => {
    setAddPhotoVisible(false);
  };

  return (
    <>
      <MenuContainer isopenit={isopenit ? 1 : 0}>
        <MenuContentWrapper>
          <h3>로고</h3>
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder={isPlaceholderVisible ? 'Searching for Photographer ID' : ''}
              onClick={handleSearchClick}
            />
            <SearchIcon />
          </SearchContainer>
          <p onClick={handleAddPhotoClick} style={{ cursor: 'pointer' }}>
            사진 추가
          </p>
          <p>사진 삭제</p>
          <p>로그아웃</p>
        </MenuContentWrapper>
      </MenuContainer>
      {isAddPhotoVisible && <AddPhoto onClose={handleCloseAddPhoto} />}
    </>
  );
};

export default HamburgerMenu;
