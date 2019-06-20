insert into userlist (exercise_id, user_id)
values($1, $2);


select * from userlist u
join exercises e on e.exercise_id = u.exercise_id
where user_id = $2;



