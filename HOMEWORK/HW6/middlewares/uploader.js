const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './assets/pics/')
    },
    filename: function (req, file, cb) {
        let filetype = '';
        if(file.mimetype === 'image/jpeg') {
            filetype = 'jpg';
          }
      cb(null, Math.floor(new Date() / 1000) + '.' + filetype )
    }
  })
   
module.exports.uploader = multer({ storage: storage, limits:{fileSize:3145728}})

