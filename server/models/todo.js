const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FacebookSchema = new Schema ({
    name:String,
    id:Number,
    image:String,
    about:String,
    fan_count:Number

});
const Facebook = mongoose.model('facebook', FacebookSchema);

module.exports = Facebook;
/*
Facebook.create({category: 1, title: 'Minion'}, function(err, doc) {
    // At this point the jobs collection is created.
});
*/
