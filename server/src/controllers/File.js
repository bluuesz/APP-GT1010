import { File } from '../models';

export default async (req, res) => {
  const { originalname: name, filename: path } = req.file;

  const file = await File.create({ name, path });

  return res.json(file);
};
