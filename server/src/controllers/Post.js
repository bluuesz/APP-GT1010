import { Post, Tag } from '../models';

export const CreatePosts = async (req, res) => {
  const { tags, title, content } = req.body;

  const post = await Post.create({
    user_id: req.userId,
    title,
    content,
  });

  if (tags && tags.length > 0) {
    post.setTags(tags);
  }

  return res.json(post);
};

export const IndexPosts = async (req, res) => {
  const { tag } = req.params;

  const tagInt = parseInt(tag, 10);

  const posts = await Post.findAll({
    include: [
      {
        model: Tag,
        where: { id: tagInt },
        as: 'tags',
        attributes: ['name'],
        through: { attributes: [] },
      },
    ],
  });

  return res.json(posts);
};
