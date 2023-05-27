const multer = require('multer');
const path = require('path')
const {path1,messages   } = require("../constant/index.constant");

const storage = multer.diskStorage({
   destination: (req, file, callback) => {
      callback(null, `views/assets/image/`)
   },
   filename: (req, file, callback) => {
      const ext = path.extname(file.originalname)
      const filenames = Date.now() + ext
      file.myfilepath = `${path1.Basepath}/assets/image/` + filenames;
      callback(null, filenames)
   }
})

module.exports = extchek = multer({
   storage: storage,
   fileFilter: (req, file, callback) => {
      if (file.mimetype == "image/png" ||
         file.mimetype == "image/jpg"  ||
         file.mimetype == "image/jpeg" ||
         file.mimetype == "video/mp4") {
         callback(null, true)
      }
      else {
         console.log(messages.onlyextfilesupported);
         callback(null, false)
      }
   }
});
