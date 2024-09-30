const TestMoment = require('../model/testMomentModel');


//create new test moment
const createTestMoment = async (req, res) => {
    const {test_id,name,start_time,photo_url} = req.body;
    try {
        const testMoment = await TestMoment.create({ 
            test_id,
            name,
            start_time,
            photo_url,
         });
        res.status(200).json({
            code: 200,
            msg: 'create successful',
            info: {
              id: testMoment._id,
              test_id: testMoment.test_id,
              name: testMoment.name,
              start_time: testMoment.start_time,
              photo_url: testMoment.photo_url,
            }
    });
      
    } catch (err) {
      console.log(err);
    }
  };

  //get all test moment
const getAllTestMoment = async (req, res) => {
    try {
      const testMoment = await TestMoment.find();
      res.status(200).json({
        code: 200,
        msg: 'get all successful',
        info: testMoment
      });
    } catch (error) {
      console.log(error);
    }
  };

module.exports = {
    createTestMoment,
    getAllTestMoment
   };