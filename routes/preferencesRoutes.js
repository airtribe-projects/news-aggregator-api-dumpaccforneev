const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  getPreferences,
  updatePreferences,
} = require("../controllers/preferencesController");
const router = express.Router();

router.get("/", protect, getPreferences);
router.put("/", protect, updatePreferences);

module.exports = router;
