const { Router } = require("express");
const resourceApply = require("./resource/resourceController");

const router = Router();

resourceApply(router);

module.exports = router;
