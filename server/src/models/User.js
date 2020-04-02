import Sequelize from 'sequelize';
import bcrypt from 'bcryptjs';
import connection from '../database';

const User = connection.define(
  'Users',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.VIRTUAL,
    },
    password_hash: {
      type: Sequelize.STRING,
    },
  },
  {
    hooks: {
      beforeSave: async user => {
        if (user.password) {
          user.password_hash = await bcrypt.hash(user.password, 8);
        }
      },
    },
  }
);

User.prototype.validPassword = function checkPassword(password) {
  return bcrypt.compare(password, this.password_hash);
};

export default User;
