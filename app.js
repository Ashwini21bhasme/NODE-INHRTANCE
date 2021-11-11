const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const connect = require("./config/database/businessConnection");
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const IN_DEVELOPMENT = true;
const DEV_PATH = path.join(__dirname, "config/environment/dev.env");
const PROD_PATH = path.join(__dirname, "/config/environment/prod.env");
if (IN_DEVELOPMENT) {
  dotenv.config({ path: DEV_PATH });
} else {
  dotenv.config({ path: PROD_PATH });
}
const inherRoutes = express.Router();
app.use("/api", inherRoutes);
require("./routes/inherRoutes")(inherRoutes);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`PORT listening on: ${PORT}`);
});
