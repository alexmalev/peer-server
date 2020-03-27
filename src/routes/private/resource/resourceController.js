const model = require("./resourceModel");

const storeResource = (req, res) => {
  const { clients, body } = req;
  const { db } = clients;
  model.storeResource(db, body);
  res.send({ message: "ok" });
};

const apply = router => {
  router.post("/resource", storeResource);
};

module.exports = apply;
