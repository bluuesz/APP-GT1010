export default (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {}
  );

  Post.associate = models => {
    Post.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user_post',
    });
  };

  Post.associate = models => {
    Post.belongsToMany(models.Tag, {
      through: 'tags_post',
      as: 'tags',
      foreignKey: 'post_id',
    });
  };

  return Post;
};
