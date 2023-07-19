import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { generateId } from './function/generateId';
import { getCurrentDate } from './function/getCurrentDate';
import { addPhoto } from './function/addPhoto';

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
  justify-content: flex-start;
`;

const AddPhotoText = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 0;
  font-family: 'K2D', sans-serif;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const FileUploadContainer = styled.div`
  border: 1px solid #b1b1b1;
  width: 264px;
  height: 264px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 0 auto;
  pointer-events: none;
  position: relative;
`;

const FileUploadInput = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
  pointer-events: auto;
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
  font-family: 'K2D', sans-serif;
`;

const CroppedImageContainer = styled.div`
  width: 264px;
  height: 264px;
  overflow: hidden;
  border-radius: 5px;
`;

const CroppedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 5px;
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
  font-family: 'K2D', sans-serif;
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
  font-family: 'K2D', sans-serif;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  height: 100%;
`;

const InputLabel = styled.label`
  font-size: 18px;
  margin-left: 50px;
  margin-bottom: 7px;
  align-self: flex-start;
  font-family: 'K2D', sans-serif;
  font-weight: bold;
`;

const InputField = styled.input`
  width: 80%;
  height: 40px;
  border: 1px solid #b1b1b1;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 20px;
  font-family: 'K2D', sans-serif;
`;

const AddPhoto = ({ onClose }) => {
  const [previewImage, setPreviewImage] = useState('');
  const [croppedImage, setCroppedImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [sns, setSns] = useState('');
  const [showInputFields, setShowInputFields] = useState(false);
  const canvasRef = useRef();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setCroppedImage(reader.result);
        setShowInputFields(false);
      };
    }
  };

  const handleNextButtonClick = async () => {
    if (!previewImage || !croppedImage) {
      return;
    }

    const id = generateId();
    const imageUrl = croppedImage;
    const date = getCurrentDate();
    const photographer = 'Hye Won';

    const photoData = {
      id,
      imageUrl,
      date,
      caption,
      photographer,
      sns,
    };

    try {
      await addPhoto(photoData);
      alert('Successfully added photo:', photoData);
      onClose();
    } catch (error) {
      console.error('Failed to add photo:', error);
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
          {!previewImage && !showInputFields ? (
            <>
              <AddPhotoText>사진을 추가하시겠습니까?</AddPhotoText>
              <FileUploadContainer>
                <FileUploadInput type="file" accept="image/*" onChange={handleFileUpload} />
                <FileUploadText htmlFor="file-upload">파일 선택</FileUploadText>
              </FileUploadContainer>
              <ButtonContainer>
                <NextButton disabled>
                  <NextButtonText>NEXT</NextButtonText>
                </NextButton>
                <NoButton onClick={handleCloseAddPhoto}>
                  <NoButtonText>NO</NoButtonText>
                </NoButton>
              </ButtonContainer>
            </>
          ) : (
            <>
              {previewImage && !showInputFields && (
                <>
                  <AddPhotoText>사진을 추가하시겠습니까?</AddPhotoText>
                  <FileUploadContainer>
                    <CroppedImageContainer>
                      <CroppedImage src={croppedImage} alt="Cropped Preview" />
                    </CroppedImageContainer>
                  </FileUploadContainer>
                  <ButtonContainer>
                    <NextButton onClick={() => setShowInputFields(true)}>
                      <NextButtonText>NEXT</NextButtonText>
                    </NextButton>
                    <NoButton onClick={handleCloseAddPhoto}>
                      <NoButtonText>NO</NoButtonText>
                    </NoButton>
                  </ButtonContainer>
                </>
              )}
              {croppedImage && showInputFields && (
                <>
                  <AddPhotoText>사진을 추가하시겠습니까?</AddPhotoText>
                  <InputContainer>
                    <InputLabel>Caption</InputLabel>
                    <InputField
                      type="text"
                      value={caption}
                      onChange={(e) => setCaption(e.target.value)}
                      placeholder="사진에 대한 설명을 해주세요"
                    />
                    <InputLabel>SNS</InputLabel>
                    <InputField
                      type="text"
                      value={sns}
                      onChange={(e) => setSns(e.target.value)}
                      placeholder="URL을 입력하세요"
                    />
                    <ButtonContainer>
                      <NextButton onClick={handleNextButtonClick}>
                        <NextButtonText>YES</NextButtonText>
                      </NextButton>
                      <NoButton onClick={handleCloseAddPhoto}>
                        <NoButtonText>NO</NoButtonText>
                      </NoButton>
                    </ButtonContainer>
                  </InputContainer>
                </>
              )}
            </>
          )}
        </AddPhotoSquare>
      </AddPhotoContainer>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </AddPhotoOverlay>
  );
};

export default AddPhoto;
