insert into users(user_name, password, email)
values($1, $2, $3);

select user_name from users
where email = $3;