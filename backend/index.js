require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();


const PORT = 5000;

app.use(express.json());

const internshipRoutes = require("./routes/internships");

app.use("/internships", internshipRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Smart Internship Portal Backend is Running 🚀",
    status: "success"
  });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

