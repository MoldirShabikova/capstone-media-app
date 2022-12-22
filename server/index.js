// require packages
require("dotenv").config();
const express = require('express')
const cors = require('cors')
const { SERVER_PORT, DATABASE_CONFIG } = process.env;
//App instance
const app = express()

//Middleware
app.use(express.json())
app.use(cors())
app.use(express.static("public"));

const { getUsers } = require("./controllers/usersController");
// const { getAuth } = require("./controllers/authController");
// const { getComments } = require("./controllers/commentsController");
// const { getPosts } = require("./controllers/postsController");
// const { getLikes } = require("./controllers/likeController");




//entry-point for app
app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,'../client/index.html'))
})


//endpoints



app.get("/api/getUsers", getUsers);

// app.get('/api/getPosts', getPosts)

// app.delete('/deletePost/:id', deletePost)


app.listen(SERVER_PORT, () => console.log("listening on port ${SERVER_PORT}"));