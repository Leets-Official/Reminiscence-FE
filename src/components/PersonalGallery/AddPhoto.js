import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const AddPhotoOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const AddPhotoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const AddPhotoSquare = styled.div`
  width: 600px;
  height: 400px;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AddPhotoText = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 0;
  align-self: flex-start;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const FileUploadContainer = styled.div`
  border: 1px solid #b1b1b1;
  width: 500px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 0 auto;
  pointer-events: none;
`;

const FileUploadInput = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
`;

const FileUploadText = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: black;
  text-align: center;
  cursor: pointer;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const NextButton = styled.div`
  background-color: white;
  border: 1px solid #b1b1b1;
  width: 250px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 50px;
`;

const NextButtonText = styled.p`
  font-size: 16px;
`;

const NoButton = styled.div`
  background-color: red;
  border: 1px solid #b1b1b1;
  width: 250px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const NoButtonText = styled.p`
  font-size: 16px;
  color: white;
`;

const AddPhoto = ({ onClose }) => {
  const [previewImage, setPreviewImage] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
    }
  };

  const handleCloseAddPhoto = () => {
    onClose();
  };

  return (
    <AddPhotoOverlay>
      <AddPhotoContainer>
        <AddPhotoSquare>
          <CloseButton onClick={handleCloseAddPhoto}>
            <FaTimes />
          </CloseButton>
          <AddPhotoText>사진을 추가 하시겠습니까?</AddPhotoText>
          <FileUploadContainer>
            {previewImage ? (
              <PreviewImage src={previewImage} alt="Preview" />
            ) : (
              <>
                <FileUploadInput type="file" accept="image/*" onChange={handleFileUpload} />
                <FileUploadText htmlFor="file-upload">파일 선택</FileUploadText>
              </>
            )}
          </FileUploadContainer>
          <ButtonContainer>
            <NextButton>
              <NextButtonText>NEXT</NextButtonText>
            </NextButton>
            <NoButton onClick={handleCloseAddPhoto}>
              <NoButtonText>NO</NoButtonText>
            </NoButton>
          </ButtonContainer>
        </AddPhotoSquare>
      </AddPhotoContainer>
    </AddPhotoOverlay>
  );
};

export default AddPhoto;
