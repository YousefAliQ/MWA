module.exports.checkForLecture = function(req, res, next){
    console.log("checkForLecture middleware")
    
    const id = req.params.id ? req.params.id :  req.body.id;
    
//    const valid = books.filter(book => book.id == id);
//      if (valid[0]){
//          req['result'] = valid[0];
//          next()
//      }else{

//          // throwError 
//      }
}