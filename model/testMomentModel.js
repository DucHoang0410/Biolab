const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestMomentSchema = new Schema({
    test_id: { 
      type: Schema.Types.ObjectId, 
      ref: 'Test',  // Liên kết với bảng Test
      required: true
    },
    name: { 
      type: String, 
      required: true 
    },
    number: { 
      type: Number
    },
    start_time: { 
      type: Date, 
      required: true 
    },
    photo_url: { 
      type: String 
    },
    ruler: { 
      type: String 
    },
  });
  
  // Tạo model từ schema
  const TestMoment = mongoose.model('TestMoment', TestMomentSchema);
  
  module.exports = TestMoment;
  