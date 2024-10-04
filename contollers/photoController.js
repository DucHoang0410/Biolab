const Photo = require('../model/photoModel');

//get all photo by test moment id
const getAllPhotoByTestMomentID = async (req, res) => {
  const {momentId} = req.params;
  try {
    const photo = await Photo.find({test_moment_id: momentId});
    res.status(200).json({
      code: 200,
      msg: 'get all photo by test moment id successful',
      info: {
        name: photo.name,
        photo_url: photo.photo_url,
        created_time: photo.created_time
      }
    });
  } catch (error) {
    console.log(error);
  }
};



module.exports = {
    getAllPhotoByTestMomentID
  };