import { User, Tag, Post } from '../models';

export default async (req, res) => {
  const user = await User.findOne({
    where: { id: req.userId },
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

  const totalPosts = await Post.count({ where: { user_id: req.userId } });

  console.log(totalPosts);

  return res.json({ countPosts: { totalPosts }, user });
};
