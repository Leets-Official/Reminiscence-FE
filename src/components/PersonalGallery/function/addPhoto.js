import { ImageData } from '../../../mocks/mockDatas/ImageData';

export const addPhoto = async (photoData) => {
  try {
    const imageDataLength = ImageData.length;
    const id = imageDataLength;
    const response = await fetch(`https://localhost:3000/api/images/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(photoData),
    });

    if (!response.ok) {
      throw new Error('사진 추가에 실패했습니다');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
