const mongoose = require('mongoose');

// const url='mongodb://localhost:27017/Task3'
// mongoose.connect(url);

const Schema = mongoose.Schema;

const studentSchema = new Schema({

    name: {type: String, required: true, max: 100},
    id:{type:Number , required:true,max:30},
    branch:{type:String,required:true},
    address:{type:String, required:true},
    contact:{type:Number , required:true}
   
});

// Export the model
module.exports = mongoose.model('student', studentSchema,'student');