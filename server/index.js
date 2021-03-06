require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const app = express();
app.use(express.json());


app.use( express.static( `${__dirname}/../build` ));


const {userInfo, login, register, logout} = require('./controllers/authController');
const {getAllExercises, addExercise, updateExercise,  deleteUserExercise} = require('./controllers/exerciseController')



const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const port = SERVER_PORT || 4000;


massive(CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log("db connected")
})

app.use(session({
    saveUninitialized: false,
    secret: SESSION_SECRET,
    resave: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14 //2 week cookie
    }
}))

//auth endpoints
app.get('/api/user', userInfo);
app.get('/api/logout', logout);
app.post('/api/signup', register);
app.post('/api/login', login);

//endpoints
app.get("/api/builder", getAllExercises);
app.post("/api/builder/:user_id", addExercise);

//update
app.put("/api/builder/:id", updateExercise);
app.delete("/api/builder/:exercise_id/:user_id",  deleteUserExercise);


const path = require('path');
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../build/index.html'))
});

app.listen(port, () => console.log(`port running on ${port}`))