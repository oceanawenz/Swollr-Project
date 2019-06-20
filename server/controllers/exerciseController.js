module.exports = {
    getAllExercises: (req, res, next) => {
        const db = req.app.get('db');
        db.get_all_exercises()
        .then((get_all_exercises) => res.status(200).send(get_all_exercises))
        .catch(err => {
            res.status(500).send(err)
        })
    },

    addExercise: (req, res, next) => {
        const db = req.app.get('db');
        console.log('this is the body', req.body)
        const {exercise_id} = req.body;
        const {user_id }= req.params
        db.post_userlist([exercise_id, user_id])
        .then(newUserList => res.status(200).send(newUserList))
        .catch(err => {
            console.log('err hit', err)
            res.status(500).send(err)
        })
    },

    addMyWorkouts: (req, res, next) => {
        

    },

    updateExercise: (req, res, next) => {
        const db = req.app.get('db');
        const { id } = req.params
        const {sets, reps} = req.body
        // console.log(req.body)
        db.update_exercise([id, sets, reps])
        .then(newExercise => res.status(200).send(newExercise))
        .catch(err => {
            res.status(500).send(err)
            console.log(err, "update not working")
        })

    },

    deleteUserExercise: (req, res, next) => {
        const db = req.app.get('db');
        console.log(req.body, "this is the delete")
        console.log(req.params, 'this is the req params')
        const {exercise_id, user_id} = req.params;
        db.delete_from_userlist([exercise_id, user_id])
        .then(newUserList=> {
            console.log(newUserList)
            res.status(200).send(newUserList)
        })
        .catch(err => {
            console.log(err, "delete error")
            res.status(500).send(err)
        })
    }
} 