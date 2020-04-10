import { Post, Tag } from '../models';

export default async (req, res) => {
  const { tags, ...data } = req.body;

  const post = await Post.create(data);

  if (tags && tags.length > 0) {
    post.setTags(tags);
  }

  // post.setTags(tags);

  return res.json(post);
};

export const Index = async (_, res) => {
  const posts = await Post.findAll({
    include: [
      {
        model: Tag,
        as: 'tags',
        attributes: ['name'],
        through: { attributes: [] },
      },
    ],
  });

  return res.json(posts);
};
