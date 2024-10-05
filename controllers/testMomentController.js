const TestMoment = require('../model/testMomentModel');

//create new test moment
const createTestMoment = async (req, res) => {
    const { test_id, name, start_time } = req.body;
    const photo_url = req.file ? `/image/${req.file.filename}` : ''; // Đường dẫn tương đối đến tệp
  
    try {
      const testMoment = await TestMoment.create({
        test_id,
        name,
        start_time,
        photo_url, // Lưu đường dẫn file vào cơ sở dữ liệu
      });
  
      res.status(200).json({
        code: 200,
        msg: 'Tạo mới thành công',
        info: {
          id: testMoment._id,
          test_id: testMoment.test_id,
          name: testMoment.name,
          start_time: testMoment.start_time,
          photo_url: testMoment.photo_url, // Trả về đường dẫn ảnh trong response
        },
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ code: 500, msg: 'Lỗi máy chủ' });
    }
  };
  
  //get all test moment
const getAllTestMomentByID = async (req, res) => {
   try{
    const {testId} = req.params;
    // console.log(testId);
     const testMoment = await TestMoment.find({test_id: testId});
        res.status(200).json({
            code: 200,
            msg: 'get all successful',
            info: testMoment
        });
   } catch{
    console.log(err);
    res.status(500).json({ code: 500, msg: 'Lỗi máy chủ' });
   }
  };

module.exports = {
    createTestMoment,
    getAllTestMomentByID
   };