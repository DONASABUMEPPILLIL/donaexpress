var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.post("/",function(req,res,next){
let obj=req.body;
//either the form content in req.body or req.params
console.log(obj)
console.log(req.params)
//all is in obj form
//u just need to validate the form here using the same thing done in previous html the difference is that ,the data is now in an object so u need to validate by considering that on mind
//i have logged the object data in console for you
});
module.exports = router;