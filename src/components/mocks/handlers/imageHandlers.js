import { rest } from "msw";
import { ImageData } from "../mockDatas/ImageData";

export const handlers = [
  rest.get("/api/images/:id", (req, res, ctx) => {
    const { id } = req.params;
    const foundData = ImageData.find((data) => data.id === parseInt(id));

    if (foundData) {
      const { imageUrl, caption, date, photographer } = foundData;
      const responseData = {
        id,
        imageUrl,
        caption,
        date,
        photographer,
      };
      return res(ctx.status(200), ctx.json(responseData));
    } else {
      return res(ctx.status(404));
    }
  }),
];
