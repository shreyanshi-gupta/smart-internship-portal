const express = require("express");

const app = express();

app.use(express.json());

const PORT = 5000;


app.get("/", (req, res) => {
  res.json({
    message: "Smart Internship Portal Backend is Running 🚀",
    status: "success"
  });
});


app.get("/internships", (req, res) => {
  const internships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechNova",
      location: "Remote"
    }
  ];

  res.json({
    success: true,
    count: internships.length,
    data: internships
  });
});


app.post("/register", (req, res) => {

  const studentData = req.body;

  res.json({
    message: "Student registered successfully",
    data: studentData
  });

});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
