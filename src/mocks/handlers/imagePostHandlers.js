import { rest } from 'msw';

export const imagePostHandlers = [
  rest.post('https://localhost:3000/images/:id', (req, res, ctx) => {
    const { imageUrl, caption, date, photographer, sns } = req.body;

    const newImageData = {
      imageUrl,
      caption,
      date,
      photographer,
      sns,
    };
    return res(ctx.status(200), ctx.json({ success: true }));
  }),
];
