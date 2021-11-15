const mongoose = require("mongoose");

const { Schema } = mongoose;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    required: true,
    default: Date.now,
  },

  excercises: [
    {
      type: {
        type: String,
        enum: ["cardio", "resistance"],
        trim: true,
        required: true,
      },

      name: {
        type: String,
        trim: true,
        required: true,
        minLength: 1,
        maxLength: 50,
      },

      duration: {
        type: Number,
        required: true,
        min: 0,
        default: 0,
      },

      weight: {
        type: Number,
        min: 0,
        default: 0,
      },

      reps: {
        type: Number,
        min: 0,
        default: 0,
      },

      sets: {
        type: Number,
        min: 0,
        default: 0,
      },

      distance: {
        type: Number,
        min: 0,
        default: 0,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
