import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { sign } from "jsonwebtoken";

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
  const data = {
    user: {
      id: user.id,
    },
  };
  const authtoken =  sign(data, "Hello LeoMessi23276",{expiresIn:'1h'});
  success = true;
  res.status(200).json({ Success: success, token: authtoken.toString(), user: user });
};
export default handler;
