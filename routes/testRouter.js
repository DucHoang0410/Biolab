const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();
const {
    createTest,
    getAllTest

} = require("../contollers/testController");

//require auth for all workout routes
router.use(requireAuth);

//create new test
router.post("/create", createTest);

//get all test
router.get("", getAllTest);

module.exports = router;
