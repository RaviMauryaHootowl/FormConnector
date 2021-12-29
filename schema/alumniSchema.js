var mongoose=require('mongoose');
  
var AlumniSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    grad_year: {
        type: String,
        required: true
    },
    class_name: {
        type: String,
        required: true
    },
});
  
module.exports = mongoose.model(
    'alumni', AlumniSchema, 'Alumnis');