import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  let success = false;
  req.method !== "POST" &&
    res.status(404).json({ Success: success, Message: "Invalid HTTP method" });
  const { username, email, password } = req.body;
  const user = await prisma.user.create({
    data: {
      username: username,
      email: email,
      password: password,
    },
  });
  success = true;
  res
    .status(200)
    .json({ Success: success, Message: "User Created", user: user });
};
export default handler;
