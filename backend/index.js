const express = require("express");
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

