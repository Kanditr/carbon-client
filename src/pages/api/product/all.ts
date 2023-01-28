import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      // Get data from api
      try {
        const response = await axios.get(
          // `${process.env.API_BASE_URL}/v1/product/`
          `https://174.138.127.145/v1/product/`
        );
        res.status(200).json(response.data);
      } catch (error: any) {
        console.log(error.response.status);
        // handle different error status
        if (error.code === "not_found") {
          res.status(404).json({ error: "Not found" });
        } else if (error.code === "unauthorized") {
          res.status(401).json({ error: "Unauthorized" });
        } else {
          res.status(500).json({ error: "Server error" });
        }
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
