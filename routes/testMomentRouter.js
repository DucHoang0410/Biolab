const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();
const upload = require('../middleware/multer');


const {
    createTestMoment,
    getAllTestMomentByID
}= require("../controllers/testMomentController");

//require auth for all workout routes
router.use(requireAuth);

// Sử dụng middleware upload.single() để xử lý file ảnh
router.post('/create',
            upload.single('photo'),
            createTestMoment);

//get all test moment
router.get("/:testId", getAllTestMomentByID);


module.exports = router;