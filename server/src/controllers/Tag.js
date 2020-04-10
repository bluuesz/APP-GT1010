import { Tag } from '../models';

export const CreateTag = async (req, res) => {
  const { name } = req.body;

  console.log(req.userId);

  if (!name)
    return res.status(400).json({ error: 'Please, write name of the tag' });

  const existsTag = await Tag.findOne({ where: { name } });

  if (existsTag)
    return res.status(401).json({ error: 'This tag already exists' });

  await Tag.create({ name });

  return res.json({ name });
};
