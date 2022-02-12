import { PrismaClient } from "@prisma/client";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  let success = false;
  req.method !== "POST" &&
    res.status(404).json({ Success: success, Message: "Invalid HTTP method" });
  const { title, content, tag, useremail, cover } = req.body;

  const post = await prisma.post.create({
    data: {
      title: title,
      content: content,
      tags: tag,
      cover: cover,
      author: {
        connect: { email: useremail },
      },
    },
  });
  success = true;
  res
    .status(200)
    .json({ Success: success, Message: "Post Created", post: post });
};
export default handler;
