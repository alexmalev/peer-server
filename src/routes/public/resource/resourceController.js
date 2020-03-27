const model = require("./resourceModel");

const getResource = (req, res) => {
  const { clients } = req;
  const { db } = clients;
  try {
    const resource = model.getResource(db);
    if (resource) {
      res.send(resource);
    } else {
      res.status(404).send({ message: "resource not found" });
    }
  } catch (err) {
    res.status(500).send();
  }
};

const setResource = async (req, res) => {
  const { body, clients } = req;
  const { peerPublisher } = clients;
  try {
    await model.setResource(body, peerPublisher);
    res.send({ message: "ok" });
  } catch (err) {
    res.status(500).send();
  }
};

const apply = router => {
  router.get("/resource", getResource);
  router.post("/resource", setResource);
};

module.exports = apply;
