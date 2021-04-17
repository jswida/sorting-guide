const express = require('express');
const router = express.Router();
const Point = require('../Models/Point');

//TO DO = > addPoint, addPhoto, remove, like, unlike, search


router.get('/', (req, res) =>{
    res.send('points')
});

router.post('/', (req, res) => {
    console.log(req.body);
})

module.exports = router;