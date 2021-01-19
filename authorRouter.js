var express = require('express');
var router = express.Router();
function routers(nav){
var authors=[{
  name:"Ernest Hemingway",
  img:"http://api.randomuser.me/portraits/thumb/men/58.jpg"},{
    name:"James Joyce",
  img:"http://api.randomuser.me/portraits/thumb/women/56.jpg"},{
      name:"Franz Kafka",
  img:"http://api.randomuser.me/portraits/thumb/men/29.jpg"}]
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("got")
  res.render("authors",{nav:[{link:"/authors",name:"Authors"},{link:"/signup",name:"Signup"},{link:"/login",name:"Login"}],title:"Authors",authors});
});
router.get('/:id', function(req, res, next) {

  res.render("author",{nav,title:"Authors",author:authors[req.params.id]});
});
return router
}


module.exports = routers;