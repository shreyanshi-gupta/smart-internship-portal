const express = require("express");
const router = express.Router();

const {
  getInternships,
  getInternshipById,
  createInternship,
  updateInternship,
  deleteInternship
} = require("../controllers/internshipController");

router.get("/", getInternships);
router.get("/:id", getInternshipById);
router.post("/", createInternship);
router.put("/:id", updateInternship);
router.delete("/:id", deleteInternship);

module.exports = router;
