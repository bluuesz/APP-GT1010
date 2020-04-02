import { DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';
import connection from '../database';

const User = connection.define(
  'Users',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.VIRTUAL,
    },
    password_hash: {
      type: DataTypes.STRING,
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
