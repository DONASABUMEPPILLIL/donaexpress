var express = require('express');
var router = express.Router();
function routers(nav){
router.get('/', function(req, res, next) {
  console.log("got in index")
  res.render("index",{nav,title:"Index"});
});
return router
}
/* GET users listing. */


module.exports = routers;