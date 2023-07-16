import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import Cropper from 'react-easy-crop';
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
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const CroppedImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const CroppedImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
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
  const [crop, setCrop] = useState({ x: 0, y: 0 }); // Crop options
  const [croppedImage, setCroppedImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [sns, setSns] = useState('');
  const canvasRef = useRef();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setCroppedImage(null);
      };
    }
  };

  const handleCropChange = (crop) => {
    setCrop(crop);
  };

  const handleCropComplete = (_, croppedAreaPixels) => {
    if (previewImage) {
      const image = new Image();
      image.src = previewImage;
      image.onload = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        const x = croppedAreaPixels.x * scaleX;
        const y = croppedAreaPixels.y * scaleY;
        const width = croppedAreaPixels.width * scaleX;
        const height = croppedAreaPixels.height * scaleY;
        canvas.width = width;
        canvas.height = height;
        context.drawImage(image, x, y, width, height, 0, 0, width, height);
        const croppedImageUrl = canvas.toDataURL('image/jpeg');
        setCroppedImage(croppedImageUrl);
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
      console.log('Successfully added photo:', photoData);
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
          <AddPhotoText>사진을 추가 하시겠습니까?</AddPhotoText>
          <FileUploadContainer>
            {previewImage && !croppedImage ? (
              <Cropper
                image={previewImage}
                crop={crop}
                zoom={1}
                aspect={1}
                onCropChange={handleCropChange}
                onCropComplete={handleCropComplete}
              />
            ) : (
              <>
                {previewImage ? (
                  <CroppedImageContainer>
                    <CroppedImage src={croppedImage} alt="Cropped Preview" />
                  </CroppedImageContainer>
                ) : (
                  <>
                    <FileUploadInput type="file" accept="image/*" onChange={handleFileUpload} />
                    <FileUploadText htmlFor="file-upload">파일 선택</FileUploadText>
                  </>
                )}
              </>
            )}
          </FileUploadContainer>
          {croppedImage && (
            <>
              <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Caption" />
              <input type="text" value={sns} onChange={(e) => setSns(e.target.value)} placeholder="SNS" />
            </>
          )}
          <ButtonContainer>
            <NextButton onClick={handleNextButtonClick}>
              <NextButtonText>{croppedImage ? 'YES' : 'NEXT'}</NextButtonText>
            </NextButton>
            <NoButton onClick={handleCloseAddPhoto}>
              <NoButtonText>NO</NoButtonText>
            </NoButton>
          </ButtonContainer>
        </AddPhotoSquare>
      </AddPhotoContainer>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </AddPhotoOverlay>
  );
};

export default AddPhoto;
