update exercises
set sets = $4, reps = $5
where exercise_id = $1;

select * from exercises;