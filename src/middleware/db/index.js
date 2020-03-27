const { set } = require("lodash");
const Database = require("../../clients/db");

const database = new Database();

const middleware = (req, res, next) => {
  set(req, "clients.db", database);
  next();
};

module.exports = middleware;
