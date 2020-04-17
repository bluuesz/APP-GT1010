import { User, Tag, Post } from '../models';

export default async (req, res) => {
  const user = await User.findOne({
    where: { id: req.userId },
    attributes: ['id', 'name'],
    include: [
      {
        model: Post,
        as: 'owner_post',
        attributes: ['id', 'title', 'content'],
        include: [
          {
            model: Tag,
            as: 'tags',
            attributes: ['name'],
            through: { attributes: [] },
          },
        ],
      },
    ],
  });

  // tratar isso

  const totalPosts = await Post.count({ where: { user_id: req.userId } });

  if (!totalPosts)
    return res.status(401).json({ message: 'Your dont have posts' });

  return res.json({ countPosts: { totalPosts }, user });
};
