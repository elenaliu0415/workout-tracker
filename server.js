const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const workoutRoutes = require("./controllers/workoutRoutes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// routes
app.use("/api/workouts", workoutRoutes);

// app.get('/stats', (req, res) => {
//     res.json({});
// });

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './public', index.html));
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
