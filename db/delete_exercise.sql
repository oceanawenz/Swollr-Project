delete from exercises
where exercise_id = $1;

select * from exercises
order by exercise_name asc;