const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");

const StoreRouter = require("./Router/StoreRouter");

const app = express();
app.use(express.json());
app.use(cors());

// serve uploaded files statically (optional)
app.use("/uploads", express.static(path.join(__dirname, "Uploads")));

// MongoDB connect
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.use("/store", StoreRouter);

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => {
  console.log("Server started at", PORT);
});
