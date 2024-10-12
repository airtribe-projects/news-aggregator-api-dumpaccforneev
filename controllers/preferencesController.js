const User = require("../models/userModel");

exports.getPreferences = async (req, res, next) => {
  try {
    const user = req.user;
    res.json({ preferences: user.preferences });
  } catch (error) {
    next(error);
  }
};

exports.updatePreferences = async (req, res, next) => {
  const { categories, languages } = req.body;

  try {
    const user = req.user;
    user.preferences = { categories, languages };
    await user.save();
    res.json({ preferences: user.preferences });
  } catch (error) {
    next(error);
  }
};
