const express = require("express");
const {dbConn} = require('./config/db');
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");
const cors = require("cors")




const app = express();
const port = 4000;

app.use(cors());

app.use(express.json());

app.use('/product',productRoutes);
app.use('/user',userRoutes);

dbConn();

app.listen(port, () => {
  console.log(`App is live at http://localhost:${port}`);
});
