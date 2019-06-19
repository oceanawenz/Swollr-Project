module.exports = {
    getAllExercises: (req, res, next) => {
        const db = req.app.get('db');
        db.get_all_exercises()
        .then((get_all_exercises) => res.status(200).send(get_all_exercises))
        .catch(err => {
            res.status(500).send(err)
        })
    },

    postExercise: (req, res, next) => {
        const db = req.app.get('db');
        const {exercise_name, img_url, instructions, sets, reps } = req.body;
        const {exercise_id, user_id} = req.params
        db.post_exercises([exercise_id, user_id,exercise_name, img_url, instructions, sets, reps])
        .then(newUserList => res.status(200).send(newUserList))
        .catch(err => {
            res.status(500).send(err)
        })
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
        const {exercise_id, user_id} = req.params;
        db.delete_exercise([exercise_id, user_id])
        .then(newUserList=> {
            res.status(200).send(newUserList)
        })
        .catch(err => {
            res.status(500).send(err)
        })
    }
} 