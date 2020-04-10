/* eslint-disable func-names */
import 'dotenv/config';

// import { DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// import connection from '../database';

export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
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

  User.associate = models => {
    User.hasMany(models.Post, {
      foreignKey: 'user_id',
      as: 'owner_post',
    });
  };

  User.prototype.validPassword = function(password) {
    return bcrypt.compare(password, this.password_hash);
  };

  User.prototype.generateToken = function() {
    return jwt.sign({ id: this.id }, process.env.APP_SECRET, {
      expiresIn: '1d',
    });
  };

  return User;
};
