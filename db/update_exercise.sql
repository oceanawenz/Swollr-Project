update exercises
set sets = $2, reps = $3
where exercise_id = $1;

select * from exercises
order by exercise_name asc;