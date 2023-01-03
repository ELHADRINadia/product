const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors"); 
const PORT = process.env.PORT || 5000;
const connectDB=require('./config/db')
connectDB()


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors());

app.use("/api/products", require ("./routes/productRoute"));
app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});




// listen to port
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});