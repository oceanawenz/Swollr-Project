--drop tables
--drop table if exists users

--Table Users
create table users (
    user_id serial primary key,
    user_name varchar(40) not null unique,
    password text not null,
    email varchar(40) not null
);

-- --Dummy Data
-- insert into users (user_name, password, email)
-- values
-- ('owenz', 'o1234', 'owenz@yahoo.com'),
-- ('mwenz', 'm1234', 'mwenz@bing.com');

insert into users(user_name, password, email)
values($1, $2, $3);


--Table Exercises
SQL table for exercises
        create table exercises (
             exercise_id serial primary key,
             exercise_name text not null,
             image_url text not null,
             instructions text not null,
             sets integer not null,
             reps integer not null,
             user_id integer references users(user_id)
);

insert into exercises (exercise_name, image_url, instructions, sets, reps)
values('Dumbbell Bicep Curl', 'https://i.imgur.com/fSnFmTU.gifv', 'Hold two barbells, the arms are streched, the hands are on your side, the palms face inwards. Bend the arms and bring the weight with a fast movement up. At the same time, rotate your arms by 90 degrees at the very beginning of the movement. At the highest point, rotate a little the weights further outwards. Without a pause, bring them down, slowly.', 0, 0),
('Pushup' , 'https://i.imgur.com/5xl9AeK.gifv' , 'Place your hands on the floor slightly wider than shoulder width apart and extend your legs behind you. Brace your core and lower your body until your chest is just above the floor. Take two seconds to lower down and two seconds to press back up. Remember to keep your back flat throughout the movement, your elbows close to the sides of your torso, and to fully extend your elbows at the top of the pushup.', 0, 0),
('Triceps Pushdown', 'https://i.imgur.com/8qXMLWq.gifv', 'Attach a rope handle to the top pulley of a cable station and grasp an end in each hand. Push the weight down to lock out your elbows and then let your elbows drift back slightly on the way up so you feel a stretch in your triceps.', 0, 0),
('Machine Chest Press', 'https://i.imgur.com/d4aM27Q.gifv', 'Sit on seat with chest approximately height of handles. Grasp handles with wide overhand grip; elbows out to sides just below shoulders. Press levers until arms are extended. Return weight until chest muscles are slightly stretched. Repeat.', 0, 0),
('Lat Pull Downs', 'https://i.imgur.com/XxW5Bx5.gifv', 'Attach a wide grip handle to the lat pulldown machine and assume a seated position. Grasp the handle with a pronated grip (double overhand) and initiate the movement by depressing the shoulder blade and then flexing the elbow while extending the shoulder. Pull the handle towards your body until the elbows are in line with your torso and then slowly lower the handle back to the starting position under control. Repeat.', 0, 0),
('Leg Press', 'https://i.imgur.com/HToLAxN.gifv', 'Adjust the seat so that your hips don’t move forward when the legs are pulled in. This can cause low back strain. Do not let the back curl up, keep it straight against padding. Keep the majority of the platform pressure on your heels.', 0, 0),
('Dumbbell Flys','https://i.imgur.com/wwCqv7u.gifv','Lying face up on bench, feet on floor, a dumbbell in each hand and held above the chest with palms facing each other, arms straight but slightly bent, lower weight to sides by rotating shoulders, stretching the pecs, then bring weight back to starting position.', 0, 0),
('Seated Rows', 'https://i.imgur.com/GwVbx2E.gifv', 'On row machine, with knees slightly bent, back straight, grasp handles and pull back to just below the chest and then lower the weight back down, ending when your arms are nearly straight.', 0 , 0),
('Weighted Calf Raise', 'https://i.imgur.com/3ldGoIQ.gifv', 'Hold a dumbbell in each hand. Stand up straight, then push through the balls of your feet and raise your heel until you are standing on your toes. Then lower slowly back to the start.', 0, 0),
('Dumbell Hammer Curl', 'https://i.imgur.com/ucdcFWL.gifv', 'Position two dumbbells to sides, palms facing in, arms straight. With elbows to sides, raise one dumbbell until forearm is vertical and thumb faces shoulder. Lower to original position and repeat with alternative arm.', 0, 0)




--join statement:

select users.user_id, user_name, exercises, exercise_name, sets, reps
from users
join exercises on (users.user_id = exercises.user_id);

-insert into exercises (exercised, user_id) 
values()