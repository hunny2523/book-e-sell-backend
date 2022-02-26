const connectToMongo= require('./db');
const express = require('express');
const cors=require('cors');
connectToMongo();

const app = express();
const port = 5000
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Hello honey');
// });
app.use('/register', require('./routes/auth'));
app.use('/login', require('./routes/login'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});