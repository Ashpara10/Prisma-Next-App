import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const feed = await prisma.post.findMany({
    include: {
      author: true,
    },
  });
  res.json(feed);
};
export default handler;
