const getResource = db => {
  const resource = db.getResource();
  return resource;
};

const setResource = async (resource, peerPublisher) => {
  await peerPublisher.publishResource(resource);
};

module.exports = { getResource, setResource };
