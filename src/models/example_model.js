const mongoose = require('mongoose');

// const url='mongodb://localhost:27017/Task3'
// mongoose.connect(url);

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
});

// Export the model
module.exports = mongoose.model('Product', ProductSchema,'Product');