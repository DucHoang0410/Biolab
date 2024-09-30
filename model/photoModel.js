const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    test_moment_id: { 
      type: Schema.Types.ObjectId, 
      ref: 'TestMoment',  // Liên kết với TestMoment
      required: true
    },
    photo_id: { 
      type: String, 
      required: true 
    },
    name: { 
      type: String, 
      required: true 
    },
    photo_url: { 
      type: String, 
      required: true 
    }
  });
  
  // Tạo model từ schema
  const Photo = mongoose.model('Photo', PhotoSchema);
  
  module.exports = Photo;
  