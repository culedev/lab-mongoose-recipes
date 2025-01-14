const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"
// mongoose
//   .connect(MONGODB_URI)
//   .then((x) => {
//     console.log(`Connected to the database: "${x.connection.name}"`);
//     // Before adding any recipes to the database, let's remove all existing ones
//     return Recipe.deleteMany();
//   })
//   .then((response) => {
//     return Recipe.insertMany(data);
//   })
//   .then((response) => {
//     console.log("Recipes added");
//     return Recipe.findOneAndUpdate(
//       { title: "Rigatoni alla Genovese" },
//       { duration: 100 },
//       { new: true }
//     );
//   })
//   .then((response) => {
//     console.log("Duration changed", response);
//     return Recipe.findOneAndDelete({ title: "Carrot Cake" });
//   })
//   .then((response) => {
//     console.log("Carrot Cake, we miss you...");
//     return mongoose.connection.close();
//   })
//   .then((response) => {
//     console.log("DB connection lost");
//   })
//   .catch((error) => {
//     console.error("Error connecting to the database", error);
//   });

const addRecipe = async () => {
  try {
    const connection = await mongoose.connect(MONGODB_URI);

    const deleteDb = await Recipe.deleteMany();

    const insertRecipes = await Recipe.insertMany(data);

    const moddifiedTime = await Recipe.findOneAndUpdate(
      { title: "Rigatoni alla Genovese" },
      { duration: 100 },
      { new: true }
    );

    const deleteCarrotCake = await Recipe.findOneAndDelete({
      title: "Carrot Cake",
    });

    const closeDb = await mongoose.connection.close();
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
};

addRecipe();
