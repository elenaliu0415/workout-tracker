const router = require('express').Router();
const Workout = require('../models/workout.js');

router.get('/', async (req, res) => {
    const users = await Workout.find({});
    res.json(users);
});


module.exports = router;