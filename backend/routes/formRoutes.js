const express = require("express");
const router = express.Router();
const FormData = require("../models/FormData");

// Route to handle form submission
router.post("/submit", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a new form entry
    const newEntry = new FormData({ name, email, message });
    await newEntry.save();

    res.status(201).json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
});

// Route to fetch submitted forms
router.get("/submissions", async (req, res) => {
  try {
    const submissions = await FormData.find();
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
});

module.exports = router;
