module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'tags',
      [
        {
          name: 'Teen',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Romance',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('tags', null, {});
  },
};
