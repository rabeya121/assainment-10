const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
  title: String,
  classNote: String,
  description: String,
  status: String,
  email: String,
});

const WorksModel = mongoose.model('Work', workSchema);

module.exports = WorksModel;
