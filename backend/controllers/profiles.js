const Profile = require('../models/profile.js');

exports.getProfile = async (req, res) => {
  const profiles = await Profile.find();
  res.status(201).json({ profiles });
};

exports.postProfile = async (req, res) => {
  const { name } = req.body;
  const imagePath = 'http://localhost:3000/images' + req.file.filename;
  const profile = new Profile({ name, imagePath });
  const createdProfile = await profile.save();
  res.status(201).json({
    profile: {
      ...createdProfile._doc,
    }
  });
};