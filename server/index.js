require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const app = express();
app.use(express.json());


const {userInfo, login, register, logout} = require('./controllers/authController');
const {getAllExercises, postExercises, updateExercise, deleteExercise} = require('./controllers/exerciseController')



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
app.get('/auth/user', userInfo);
app.get('/auth/logout', logout);
app.post('/auth/register', register);
app.post('/auth/login', login);

//exercise endpoints
app.get("/api/exercises", getAllExercises);
app.post("/api/exercises", postExercises);
//update
app.put("/api/exercises/:id", updateExercise);
app.delete("/api/exercises/:id", deleteExercise);





app.listen(port, () => console.log(`port running on ${port}`))