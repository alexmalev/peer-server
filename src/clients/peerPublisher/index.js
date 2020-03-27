const axios = require("axios");
const { PEER_HOST } = process.env;
const { baseRoute } = require("../../utils/enums");

const axiosInstance = axios.create({
  baseURL: `${PEER_HOST}${baseRoute.PRIVATE}`,
  timeout: 10000
});

const peerPublisher = {
  publishResource: resource => axiosInstance.post("/resource", resource)
};

module.exports = peerPublisher;
