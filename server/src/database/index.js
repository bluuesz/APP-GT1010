import Sequelize from 'sequelize';

import dbConfig from '../config/database';

const models = [];

const connection = new Sequelize(dbConfig);

models.map(model => model.init(connection));

export default connection;
