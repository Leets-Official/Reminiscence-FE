import { rest } from 'msw';
import { ImageData } from '../mockDatas/ImageData';

export const imageGetHandlers = [
  rest.get('https://localhost:3000/api/images/length', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ length: ImageData.length }));
  }),

  rest.get('https://localhost:3000/api/images/:id', (req, res, ctx) => {
    const { id } = req.params;
    console.log('요청한 데이터의 id = ' + id);
    const foundData = ImageData.find((data) => data.id === Number(id));
    console.log('This is foundData ', foundData);
    if (foundData) {
      const { imageUrl, caption, date, photographer, sns } = foundData;
      const responseData = {
        id,
        imageUrl,
        caption,
        date,
        photographer,
        sns,
      };
      return res(ctx.status(200), ctx.json(responseData));
    }
    return res(ctx.status(200), ctx.body('{}'));
  }),
];
