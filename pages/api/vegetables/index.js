import { vegetables } from "../../../data/vegetables";

const handler = (req, res) => {
  res.status(200).json(vegetables);
};

export default handler;
