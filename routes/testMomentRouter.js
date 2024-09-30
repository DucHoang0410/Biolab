const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();
const {
    createTestMoment,
    getAllTestMoment
}= require("../contollers/testMomentController");

//require auth for all workout routes
router.use(requireAuth);

//create new test moment
router.post("/create", createTestMoment);

//get all test moment
router.get("", getAllTestMoment);


module.exports = router;