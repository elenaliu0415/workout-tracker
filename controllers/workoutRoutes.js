const router = require('express').Router();
const Workout = require('../models/workout.js');


router.get('/', async (req, res) => {
    // const result = Workout.aggregate([
    //     {
    //         "$addFields": {
    //             "totalDuration": { "$sum": "$exercises.duration" }
    //         }
    //     }
    // ]);
    const workouts = await Workout.find({});
    // console.log(result);
    // console.log(workouts);
    res.json(workouts);
});

router.get('/range', async (req, res) => {
    const workouts = await Workout.find({});
    res.json(workouts);
});

router.put("/:id", async (req, res) => {
    let workout = await Workout.findById(req.params.id);

    workout.excercises.push(req.body);
    const result = await workout.save();
    res.json(result);
});

router.post("/", async (req, res) => {
    const workout = await Workout.create({ day: new Date() });
    res.json(workout);
});

module.exports = router;