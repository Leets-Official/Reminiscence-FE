import { rest } from 'msw';

export const imagePostHandlers = [
  rest.post('https://localhost:3000/api/images/:id', (req, res, ctx) => {
    const { id, imageUrl, date, caption, photographer, sns } = req.body;
    console.log('수신된 사진 데이터 : ', { id, imageUrl, date, caption, photographer, sns });

    return res(ctx.status(200), ctx.json({ success: true }));
  }),
];
