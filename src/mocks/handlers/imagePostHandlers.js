import { rest } from 'msw';

export const imagePostHandlers = [
  rest.post('https://localhost:3000/api/images/:id', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ success: true }));
  }),
];
