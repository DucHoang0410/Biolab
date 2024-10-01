const Photo = require('../model/photoModel');

//get all photo by test moment id
const getAllPhotoByTestMomentID = async (req, res) => {
  const {test_moment_id} = req.params;
  try {
    const photo = await Photo.find({test_moment_id: test_moment_id});
    res.status(200).json({
      code: 200,
      msg: 'get all photo by test moment id successful',
      info: photo
    });
  } catch (error) {
    console.log(error);
  }
};



module.exports = {
    getAllPhotoByTestMomentID
  };