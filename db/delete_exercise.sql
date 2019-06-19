delete from exercises
where user_id = $1;

select * from exercises
where user_id = $1 or user_id is null
order by exercise_name asc;