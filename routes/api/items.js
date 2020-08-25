const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser');

//bodyParser Middleware
router.use(bodyParser.json());


// Item Model
const Item = require('../../models/Item');

router.get('/', (req, res) => {

    Item.find()
    .then(items => res.json(items));
  });

router.post('/',(req,res)=>{

    const newitem = new Item({
            name: req.body.name 
    });
    newitem.save()
           .then(item => res.redirect('http://localhost:3000/'));
}); 

module.exports = router ;