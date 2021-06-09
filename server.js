const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./database/connection");

dotEnv.config();

const app = express();

//db connective
dbConnection();

//cors
app.use(cors());

//require payload middleware
app.use(express.json());
app.use(express.urlencoded());
const router = require("./routes");
router.config(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listing on port ${port}`);
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({
    status: 500,
    message: err.message,
    body: {},
  });
});
