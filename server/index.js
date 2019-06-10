require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');


const {SERVER_PORT, CONNECTION_STRING, SESSION_SCECRET} = process.env

const port = SERVER_PORT || 4000;

massive(CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log("db connected")
})

app.listen(port, () => console.log(`port running on ${port}`))