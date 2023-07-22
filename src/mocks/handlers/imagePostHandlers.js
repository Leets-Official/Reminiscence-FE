import { rest } from 'msw';

export const imagePostHandlers = [
  rest.post('https://localhost:3000/images/:id', (req, res, ctx) => {
    const { id } = req.params;
    const { imageUrl, caption, date, photographer, sns } = req.body;

    const newImageData = {
      id: Number(id),
      imageUrl,
      caption,
      date,
      photographer,
      sns,
    };

    console.log('imageData가 성공적으로 전송 되었습니다.');
    console.log(newImageData);

    return res(ctx.status(200), ctx.json({ success: true }));
  }),
];
