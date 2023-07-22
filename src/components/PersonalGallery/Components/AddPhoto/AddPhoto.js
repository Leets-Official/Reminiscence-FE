import React, { useState, useRef } from 'react';
import * as S from './AddPhoto.styled';
import { FaTimes } from 'react-icons/fa';
import { generateId } from './function/generateId';
import { getCurrentDate } from './function/getCurrentDate';
import { addPhoto } from './function/addPhoto';

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
    <S.AddPhotoOverlay>
      <S.AddPhotoContainer>
        <S.AddPhotoSquare>
          <S.CloseButton onClick={handleCloseAddPhoto}>
            <FaTimes />
          </S.CloseButton>
          {!previewImage && !showInputFields ? (
            <>
              <S.AddPhotoText>사진을 추가하시겠습니까?</S.AddPhotoText>
              <S.FileUploadContainer>
                <S.FileUploadInput type="file" accept="image/*" onChange={handleFileUpload} />
                <S.FileUploadText htmlFor="file-upload">파일 선택</S.FileUploadText>
              </S.FileUploadContainer>
              <S.ButtonContainer>
                <S.NextButton disabled>
                  <S.NextButtonText>NEXT</S.NextButtonText>
                </S.NextButton>
                <S.NoButton onClick={handleCloseAddPhoto}>
                  <S.NoButtonText>NO</S.NoButtonText>
                </S.NoButton>
              </S.ButtonContainer>
            </>
          ) : (
            <>
              {previewImage && !showInputFields && (
                <>
                  <S.AddPhotoText>사진을 추가하시겠습니까?</S.AddPhotoText>
                  <S.FileUploadContainer>
                    <S.CroppedImageContainer>
                      <S.CroppedImage src={croppedImage} alt="Cropped Preview" />
                    </S.CroppedImageContainer>
                  </S.FileUploadContainer>
                  <S.ButtonContainer>
                    <S.NextButton onClick={() => setShowInputFields(true)}>
                      <S.NextButtonText>NEXT</S.NextButtonText>
                    </S.NextButton>
                    <S.NoButton onClick={handleCloseAddPhoto}>
                      <S.NoButtonText>NO</S.NoButtonText>
                    </S.NoButton>
                  </S.ButtonContainer>
                </>
              )}
              {croppedImage && showInputFields && (
                <>
                  <S.AddPhotoText>사진을 추가하시겠습니까?</S.AddPhotoText>
                  <S.InputContainer>
                    <S.InputLabel>Caption</S.InputLabel>
                    <S.InputField
                      type="text"
                      value={caption}
                      onChange={(e) => setCaption(e.target.value)}
                      placeholder="사진에 대한 설명을 해주세요"
                    />
                    <S.InputLabel>SNS</S.InputLabel>
                    <S.InputField
                      type="text"
                      value={sns}
                      onChange={(e) => setSns(e.target.value)}
                      placeholder="URL을 입력하세요"
                    />
                    <S.ButtonContainer>
                      <S.NextButton onClick={handleNextButtonClick}>
                        <S.NextButtonText>YES</S.NextButtonText>
                      </S.NextButton>
                      <S.NoButton onClick={handleCloseAddPhoto}>
                        <S.NoButtonText>NO</S.NoButtonText>
                      </S.NoButton>
                    </S.ButtonContainer>
                  </S.InputContainer>
                </>
              )}
            </>
          )}
        </S.AddPhotoSquare>
      </S.AddPhotoContainer>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </S.AddPhotoOverlay>
  );
};

export default AddPhoto;
