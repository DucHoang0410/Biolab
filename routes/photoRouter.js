const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();
const upload = require('../middleware/multer');

const {
    getAllPhotoByTestMomentID,
    createNewPhotos
} = require("../controllers/photoController");

// Require auth for all photo routes
router.use(requireAuth);

// Get all photos by test moment ID
router.get("/:momentId", getAllPhotoByTestMomentID);

// Create new photos
router.post("/create-photos", upload.array('photos'), createNewPhotos);

module.exports = router;
