const express = require('express');
const multer  = require('multer');
const app = express();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,__dirname+'/public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() +`.jpg`) //Appending extension
  }
});
app.use(express.static(__dirname+"/public"));
const upload = multer({ storage: storage });
app.listen(3000, () => {
  console.log('server started');
});
app.post('/upload', upload.single('file'), function (req, res){
  res.json(req.file);
});