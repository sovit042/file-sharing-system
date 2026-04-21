const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const fileRoutes = require("./routes/fileRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/files", fileRoutes);

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/fileshare")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});