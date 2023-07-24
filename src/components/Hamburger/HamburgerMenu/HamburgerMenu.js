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
      <S.MenuContainer isopen={isopen ? 1 : 0}>
        <S.MenuContentWrapper>
          <S.LogoContainer to="/gallery">Reminiscence</S.LogoContainer>
          <S.SearchContainer>
            <S.SearchInput
              type="text"
              placeholder={isPlaceholderVisible ? 'Searching for Photographer ID' : ''}
              onClick={handleSearchClick}
            />
            <S.SearchIcon />
          </S.SearchContainer>
          <S.TextContainer onClick={handleAddPhotoClick} style={{ cursor: 'pointer' }}>
            Add Picture
          </S.TextContainer>
          <S.TextContainer>Delete Picture</S.TextContainer>
          <S.LogoutContainer>Log Out</S.LogoutContainer>
        </S.MenuContentWrapper>
      </S.MenuContainer>
      {isAddPhotoVisible && <AddPhoto onClose={handleCloseAddPhoto} />}
    </>
  );
};

export default HamburgerMenu;
