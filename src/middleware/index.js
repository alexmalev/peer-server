const bodyParser = require("body-parser");
const peerPublisher = require("./peerPublisher");
const dbMiddleWare = require("./db");

const middlewares = [bodyParser.json(), peerPublisher, dbMiddleWare];

module.exports = middlewares;
