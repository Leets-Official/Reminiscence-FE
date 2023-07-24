import React, { useState } from 'react';
import AddPhoto from '../../AddPhoto';
import * as S from './HamburgerMenu.styled';

const HamburgerMenu = ({ isopen }) => {
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
      <S.MenuContainer isopenit={isopenit ? 1 : 0}>
        <S.MenuContentWrapper>
          <h3>로고</h3>
          <S.SearchContainer>
            <S.SearchInput
              type="text"
              placeholder={isPlaceholderVisible ? 'Searching for Photographer ID' : ''}
              onClick={handleSearchClick}
            />
            <S.SearchIcon />
          </S.SearchContainer>
          <p onClick={handleAddPhotoClick} style={{ cursor: 'pointer' }}>
            사진 추가
          </p>
          <p>사진 삭제</p>
          <p>로그아웃</p>
        </S.MenuContentWrapper>
      </S.MenuContainer>
      {isAddPhotoVisible && <AddPhoto onClose={handleCloseAddPhoto} />}
    </>
  );
};

export default HamburgerMenu;
