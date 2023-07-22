import { ImageData } from '../../../../../mocks/mockDatas/ImageData';

export const generateId = () => {
  const imageDataLength = ImageData.length;
  const latestId = imageDataLength > 0 ? ImageData[imageDataLength - 1].id : 0;
  const newId = latestId + 1;

  return newId;
};
