insert into users(user_name, password, email)
values($1, $2, $3);

select user_name, email, user_id from users
where email = $3;