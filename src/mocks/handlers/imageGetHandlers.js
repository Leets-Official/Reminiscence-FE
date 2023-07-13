import { rest } from 'msw';
import { ImageData } from '../mockDatas/ImageData';

export const imageGetHandlers = [
  rest.get('https://localhost:3000/api/images/:id', (req, res, ctx) => {
    const { id } = req.params;
    console.log('요청한 데이터의 id = ' + id);
    const foundData = ImageData.find((data) => data.id === Number(id));
    console.log('This is foundData ' + foundData);
    if (foundData) {
      const { imageUrl, caption, date, photographer } = foundData;
      const responseData = {
        id,
        imageUrl,
        caption,
        date,
        photographer,
      };
      console.log('This is responseData ' + responseData);
      console.log('This is Json ver ' + ctx.json(responseData));
      return res(ctx.status(200), ctx.json(responseData));
    }
    return res(ctx.status(404), ctx.json({}));
  }),
];
