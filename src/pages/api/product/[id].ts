import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      // Update data in database
      res.status(200).json({ value: "this is get" });
      break;
    case "PUT":
      // Update data in database
      res.status(200).json({ value: "this is put" });
      break;
    case "DELETE":
      // Delete data in database
      res.status(200).json({ value: "this is delete" });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
