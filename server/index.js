const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const url = 'http://localhost:3000/api/items/images';

// MiddleWare
app.use(bodyParser.json());
app.use(cors());

// const upload = multer({
//     dest: './uploads',
// });

// app.post(url, upload.single("file", (req, res) => {
//     res.json({ file: req.file });
// }));

const items = require('./routes/api/items');
const coupons = require('./routes/api/coupons');

app.use('/api/items', items);
app.use('/api/coupon/check', coupons);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`The server is listening on port ${port}`));


