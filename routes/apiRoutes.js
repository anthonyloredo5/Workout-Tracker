const router = require('express').Router();
const path = require('path');
const { Workout } = require('../models/index.js');
const model = require('../models/index.js');

//Get route
// mongoose aggregate function for get routes 
router.get('/api/workouts', (req, res) => {
    model.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercise.duration',
                },
            },
        },
    ])
    .then((dbWorkouts) => {
        res.json(dbWorkouts);
    })
    .catch((err) => {
        res.json(err);
    });
});

router.get('/api/workouts/range', (req, res) => {
    model.Workout.find().limit(10).then((workouts) => {
        res.status(200).json(workouts);
    })
});

router.post('/api/workouts', (req, res) => {
    model.Workout.create({}).then((workouts) => {
        res.status(200).json(workouts);
    })
});

router.put('/api/workouts/:id', (req, res) => {
    const id = req.params.id;
    const post = req.body;

    model.Workout.findByIdAndUpdate({ _id: id }, { $push: {exercises: post}}).then((workouts) => {
        res.status(200).json(workouts);
    })
});

module.exports = router;