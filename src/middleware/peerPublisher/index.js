const { set } = require("lodash");
const peerPublisher = require("../../clients/peerPublisher");

const middleware = (req, res, next) => {
  set(req, "clients.peerPublisher", peerPublisher);
  next();
};

module.exports = middleware;
