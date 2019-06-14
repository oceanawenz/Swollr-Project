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
        const { exercise_name, img_url, instructions, sets, reps } = req.body;
        db.post_exercises([exercise_name, img_url, instructions, sets, reps])
        .then(post_exercises => res.status(200).send(post_exercises))
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
        })

    },

    deleteExercise: (req, res, next) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.delete_exercise([id])
        .then(delete_exercise => {
            res.status(200).send(delete_exercise)
        })
        .catch(err => {
            res.status(500).send(err)
        })
    }
} 