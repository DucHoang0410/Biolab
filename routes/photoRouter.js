const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();
const upload = require('../middleware/multer');

const {
    getAllPhotoByTestMomentID
} = require("../contollers/photoController");

//require auth for all workout routes
router.use(requireAuth);


// get all photo by test moment id
router.get("/:momentId", getAllPhotoByTestMomentID);

module.exports = router;