const router = require('express').Router();
const mongoose = require('mongoose');

const Data = mongoose.model('Data');

router.get('/', async (req, res) => {
    try {
        const datas = await Data.find({}) //this will get the data from table
        res.send(datas);          //this will send data to the html page
    }
    catch (error) {
        res.status(500);
    }
})

router.post('/addData', async (req, res) => {
   
        const data = new Data({
            firstName: req.body.fname,    //this will assign the i/p data to the database fields
            lastName: req.body.lname
        });
        await data.save(data);   //this will save the data
        res.send(data);          //this will send data to the html page
});





router.put('/updateData', async (req, res) => {
    const { _id, fname, lname } = req.body;
    Data.findByIdAndUpdate(_id, { $set: { firstName: fname, lastName: lname } }, (err, result) => {
        if(err) {
            res.json({error: err});
        } else {
            res.json({message: "Ok"});
        }
    });
});

//in this api it will fetch the field by id then it will set the i/p data to the fetched field so it will update the data..


router.delete('/deleteData', async (req, res) => {
    const { _id } = req.body;
    try {
        Data.deleteOne({ _id: _id }, (err, result) => {
            if(err) {
                res.json({error: err});
            } else {
                res.json({message: "Ok"});
            }
        });
    }
    catch (error) {
        res.status(500);
    }
})


//in this it will delete the one field at a time by id.. 
module.exports = router;
