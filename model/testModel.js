const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema cho Test
const TestSchema = new Schema({
  creator: { 
    type: Schema.Types.ObjectId, 
    ref: 'User',  // Liên kết với bảng User
    required: true
  },
  name: { 
    type: String, 
    required: true 
  },
  short_name: { 
    type: String, 
    required: true 
  },
  created_time: { 
    type: Date, 
    required: true 
  },
});

// Tạo model từ schema
const Test = mongoose.model('Test', TestSchema);

module.exports = Test;
