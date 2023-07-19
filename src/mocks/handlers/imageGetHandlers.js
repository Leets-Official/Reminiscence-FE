import { rest } from 'msw';
import { ImageData } from '../mockDatas/ImageData';

export const imageGetHandlers = [
  rest.get('https://localhost:3000/api/images/length', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ length: ImageData.length }));
  }),

  rest.get('https://localhost:3000/api/images/:id', (req, res, ctx) => {
    const { id } = req.params;
    const foundData = ImageData.find((data) => data.id === Number(id));
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
