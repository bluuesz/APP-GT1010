import Sequelize from 'sequelize';

// models

import dbConfig from '../config/database';

const models = [];

const connection = new Sequelize(dbConfig);

models.map(model => model.init(connection));

export default connection;
