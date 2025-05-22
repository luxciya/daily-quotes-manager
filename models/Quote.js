const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  text: String,
  author: String,
});

module.exports = mongoose.model('Quote', QuoteSchema);
