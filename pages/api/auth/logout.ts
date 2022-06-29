import Cookies from "cookies";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "POST") {
    return res.status(404).json({ message: "method not supported" });
  }

  const cookies = new Cookies(req, res);

  cookies.set("access_token");

  res.status(200).json({ message: "logout successfully" });
}
