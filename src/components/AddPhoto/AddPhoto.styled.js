import { styled } from 'styled-components';

export const AddPhotoOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const Hi = styled.div`
asdfa`;

export const AddPhotoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const AddPhotoSquare = styled.div`
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

export const AddPhotoText = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 0;
  font-family: 'K2D', sans-serif;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const FileUploadContainer = styled.div`
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

export const FileUploadInput = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
  pointer-events: auto;
`;

export const FileUploadText = styled.label`
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

export const CroppedImageContainer = styled.div`
  width: 264px;
  height: 264px;
  overflow: hidden;
  border-radius: 5px;
`;

export const CroppedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 5px;
`;

export const NextButton = styled.div`
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

export const NextButtonText = styled.p`
  font-size: 16px;
  font-family: 'K2D', sans-serif;
`;

export const NoButton = styled.div`
  background-color: red;
  border: 1px solid #b1b1b1;
  width: 250px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const NoButtonText = styled.p`
  font-size: 16px;
  color: white;
  font-family: 'K2D', sans-serif;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  height: 100%;
`;

export const InputLabel = styled.label`
  font-size: 18px;
  margin-left: 50px;
  margin-bottom: 7px;
  align-self: flex-start;
  font-family: 'K2D', sans-serif;
  font-weight: bold;
`;

export const InputField = styled.input`
  width: 80%;
  height: 40px;
  border: 1px solid #b1b1b1;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 20px;
  font-family: 'K2D', sans-serif;
`;
