var mongoose = require('mongoose');
var express = require('express'); 
var router = express.Router();
var AlumniModel = require('./schema/alumniSchema');
require('dotenv').config();
  
// Connecting to database
var query = process.env.MONGO_KEY;
  
const db = (query);
mongoose.Promise = global.Promise;

mongoose.connect(db, { useNewUrlParser : true, 
useUnifiedTopology: true }, function(error) {
    if (error) {
        console.log("Error!" + error);
    }
});
  
router.post('/save', async (req, res) => {
    const body = req.body;
    const alumniData = {
        name: body["Name"][0],
        email: body["Email"][0],
        password: body["New Password"][0],
        age: body["Age"][0],
        phone: body["Phone"][0],
        address: body["Address"][0],
        grad_year: body["Graduation Year"][0],
        class_name: body["Class Name"][0],
    }
    await AlumniModel.create(alumniData);
    res.send(alumniData);
});

router.get('/getNew', async (req, res) => {
    const allData = await AlumniModel.find();
    await AlumniModel.remove();
    res.send(allData);
})

module.exports = router;