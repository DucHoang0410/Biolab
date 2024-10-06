const Photo = require('../model/photoModel');
const path = require('path');

//get all photo by test moment id
const getAllPhotoByTestMomentID = async (req, res) => {
  const { momentId } = req.params;
  try {
    const photos = await Photo.find({ test_moment_id: momentId }); // Fetch photos based on momentId

    // Map through the photos array to create an array of photo objects
    const photoInfo = photos.map(photo => ({
      name: photo.name,
      photo_url: photo.photo_url,
      created_time: photo.created_time,
    }));

    // Return the photo information in the response, even if it's empty
    res.status(200).json({
      code: 200,
      msg: 'Get all photos by test moment ID successful',
      info: photoInfo, // Return the array of photo objects (can be empty)
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      msg: 'An error occurred while fetching photos',
      error: error.message,
    });
  }
};


// create multiple photos
const createNewPhotos = async (req, res) => {
  const { test_moment_id } = req.body; // Expecting test_moment_id in the body
  const newPhotos = [];

  try {
    const promises = req.files.map(async (file) => {
      // Extract the base name of the file without the extension
      const nameWithoutExt = path.basename(file.originalname, path.extname(file.originalname));

      const newPhoto = new Photo({
        test_moment_id: test_moment_id,
        name: nameWithoutExt, // Set the name to the file name without the extension
        photo_url: file.path, // Set the photo URL to the uploaded file's path
        created_time: new Date(), // Set the created time to now
      });

      const savedPhoto = await newPhoto.save();
      newPhotos.push(savedPhoto);
    });

    await Promise.all(promises);

    res.status(200).json({
      code: 200,
      msg: 'Created new photos successfully',
      data: newPhotos,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      msg: 'An error occurred while creating photos',
      error: error.message,
    });
  }
};
//get photo detail
const getPhotoDetail = async (req, res) => {
  const { photoId } = req.params;
  try {
    const photo = await Photo.findById(photoId);

    if (!photo) {
      return res.status(404).json({
        code: 404,
        msg: 'Photo not found',
      });
    }

    res.status(200).json({
      code: 200,
      msg: 'Get photo detail successful',
      info: photo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      msg: 'An error occurred while fetching photo detail',
      error: error.message,
    });
  }
};



module.exports = {
    getAllPhotoByTestMomentID,
    createNewPhotos,
    getPhotoDetail
  };