export default (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    'Tag',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );

  Tag.associate = models => {
    Tag.belongsToMany(models.Post, {
      through: 'tags_post',
      as: 'posts',
      foreignKey: 'tag_id',
    });
  };

  return Tag;
};
