const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  level: [{
    type: String,
    enum: ["easy peasy", "amateur chef", "ultrapro chef"]
  }],
  ingredients: [{
    type: String
  }],
  cuisine: {
    type: String,
    required: true,
  },
  dishType: [{
    type: String,
    enum: ["breakfast", "main_course", "soup", "snack", "drink", "dessert", "other"]
  }],
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg"
  },
  duration: {
    type: Number,
    minimum: 0
  },
  creator: {
    type: String
  },
  created: {
    type: Date,
    default: "2022-07-22"
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
