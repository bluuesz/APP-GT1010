import { Post, Tag } from '../models';

export const CreatePosts = async (req, res) => {
  const { tags, title, content, image_id } = req.body;

  const post = await Post.create({
    user_id: req.userId,
    title,
    content,
    image_id,
  });

  if (tags && tags.length > 0) {
    post.setTags(tags);
  }

  return res.json(post);
};

export const IndexPosts = async (req, res) => {
  const { tag_id } = req.params;

  const tagInt = parseInt(tag_id, 10);

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

  if (posts.length === 0)
    return res
      .status(404)
      .json({ message: "Don't exists post for this tag selected" });

  return res.json(posts);
};

export const DeletePost = async (req, res) => {
  const { id } = req.params;

  const post = await Post.findOne({ where: { id } });

  if (!post) {
    return res.status(404).json({ error: 'This post not exists' });
  }

  if (post.user_id !== req.userId) {
    return res
      .status(401)
      .json({ error: 'You dont have permission to cancel this post' });
  }

  await post.destroy();

  return res.status(200).json({ message: 'Post has been deleted' });
};
