const router = require('express').Router();
const path = require('path');
const model = require('../models/index.js');

//Get route
// mongoose aggregate function for get routes 
router.get('/api/workouts', (req, res) => {
    model.Workout.find().then((workouts) => {

        // var workoutsWithDuration = []

        
        // for (let k = 0; k < workouts.length; k++) {
        //  console.log('earch person from DB!!!!!!!!!!', workouts[k])

        //     var total=0
        //     for(var i = 0; i < workouts[k].exercises.length; i++){
        //         console.log('talling up the duration loop!!!!')
        //         total += workouts[k].exercises[i].duration;
        //     }
        //     // console.log('TOTAL TO BE ADDED!! to today duration', total)
        //     // workouts[k].totalDuration = total;
        //     console.log('WORKOUT WIHT NEW TOTAL DURATION ADDED!!!', workouts[k])

        //     var newWorkout = Object.assign({}, workouts[k], {totalDuration: total});
        //     console.log('New workout we made with duration!!!', newWorkout)

        //     workoutsWithDuration.push(newWorkout)

        // }

        res.status(200).json(workouts);
    })
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