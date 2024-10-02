const Tests = require("../model/testModel");
const mongoose = require("mongoose");



//create new chapters
const createTest = async (req, res) => {
    const {name,created_time} = req.body;
    // console.log(req.user);
    try {
      const user_id = req.user._id;
     
        const test = await Tests.create({ 
            creator: user_id,
            name,
            created_time,
         });
        res.status(200).json({
            code: 200,
            msg: 'create successful',
            info: {
              id: test._id,
              name: test.name,
              created_time: test.created_time,
            }
    });
      
    } catch (err) {
      console.log(err);
    }
  };
//get all test
const getAllTest = async (req, res) => {
  try {
    const test = await Tests.find();
    res.status(200).json({
      code: 200,
      msg: 'get all successful',
      info: test
    });
  } catch (error) {
    console.log(error);
  }
};




module.exports = {
    createTest,
    getAllTest
  };
  