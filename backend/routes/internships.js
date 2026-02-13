const express = require("express");
const router = express.Router();

const internships = require("../data/internships");

router.get("/", (req, res) => {
  res.json({
    success: true,
    count: internships.length,
    data: internships
  });
});


router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const internship = internships.find(item => item.id === id);

  if (!internship) {
    return res.status(404).json({
      success: false,
      message: "Internship not found"
    });
  }

  res.json({
    success: true,
    data: internship
  });
});


router.post("/", (req, res) => {
  const { title, company, location } = req.body;

  if (!title || !company || !location) {
    return res.status(400).json({
      success: false,
      message: "Title, company and location are required"
    });
  }

  const newInternship = {
    id: internships.length + 1,
    title,
    company,
    location
  };

  internships.push(newInternship);

  res.status(201).json({
    success: true,
    message: "Internship added successfully",
    data: newInternship
  });
});


router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, company, location } = req.body;

  const internship = internships.find(item => item.id === id);

  if (!internship) {
    return res.status(404).json({
      success: false,
      message: "Internship not found"
    });
  }

  internship.title = title || internship.title;
  internship.company = company || internship.company;
  internship.location = location || internship.location;

  res.json({
    success: true,
    message: "Internship updated successfully",
    data: internship
  });
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = internships.findIndex(item => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Internship not found"
    });
  }

  const deletedInternship = internships.splice(index, 1);

  res.json({
    success: true,
    message: "Internship deleted successfully",
    data: deletedInternship[0]
  });
});

module.exports = router;
