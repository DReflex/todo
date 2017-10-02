const express= require('express');
const router = express.Router();
const Facebook = require('../models/todo');

//get all
router.get('/facebook', function(req, res, next){
  Facebook.find({}).then(function(result){
    res.send(result);
  }).catch(next);
});
//get type
router.get('/facebook/:type', function(req, res, next){
  Facebook.find({type: req.params.type})
  .then(function(product){
    res.send(product)
  }).catch(next);
});

router.post('/facebook', function(req, res, next){
  console.log(req.body)
  Facebook.create(req.body).then(function(Product){
    res.send(Product);
  }).catch(next)
});

router.put('/facebook/:id', function(req, res, next){
  console.log("facebook init", req.body)
    Facebook.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Facebook.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        });
    }).catch(next);
});

router.delete('/facebook/:id', function(req, res, next){
  Facebook.findByIdAndRemove({_id: req.params.id}).then(function(del){
    res.send(del);
  }).catch(next);
})
module.exports = router;
