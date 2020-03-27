const router = require('express').Router();
const mongoose = require('mongoose');

const Data = mongoose.model('Data');

router.get('/', async (req, res) => {
    try {
        const datas = await Data.find({})
        res.send(datas);
    }
    catch (error) {
        res.status(500);
    }
})

router.post('/addData', async (req, res) => {
   
        const data = new Data({
            firstName: req.body.fname,
            lastName: req.body.lname
        });
        await data.save(data);
        res.send(data);
});



router.get('/:dataId', async (req, res) => {
    try {
        const data = await Data.findOne({ _id: req.params.dataId })
        res.send(data)
    }
    catch (error) {
        res.status(500);
    }
})

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

module.exports = router;