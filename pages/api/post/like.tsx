import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    let success = false;

    const like = await prisma.post.update({
      where: {
        id: req.body.id,
      },
      data: {
        likes: {
          increment: 1,
        },
      },
    });
    success = true;
    return res
      .status(200)
      .json({ Success: success, Message: "Like incremented ", like });
  } catch (err: any) {
    console.log(err.message);
  }
};

export default handler;
