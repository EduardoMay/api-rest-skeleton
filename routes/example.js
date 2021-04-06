const { Router } = require("express");
const ExampleController = require("../controllers/example.controller");

const router = new Router();

router.get("", ExampleController.getExample);

module.exports = router;
