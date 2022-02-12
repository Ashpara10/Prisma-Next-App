import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const postId = req.query.id;
    if (req.method === "GET") {
      HandleGET(String(postId),res)
    }
    if (req.method==='DELETE') {
      HandleDELETE(String(postId),res)
    } 
  
  } catch (err: any) {
    console.log(err.message);
  }
};

async function HandleGET(id: string, res: NextApiResponse) {
  const post = await prisma.post.findUnique({
    where: { id: id },
    include: { author: true },
  });
  res.json(post);
}

// DELETE /api/post/:id
async function HandleDELETE(id: string, res: NextApiResponse) {
  const post = await prisma.post.delete({
    where: { id: id },
  });
  res.json(post);
}

export default handler