// require packages
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const  userCtrl  = require("./controllers/usersController");
// const authCtrl  = require("./controllers/authController");
// const  commentCtrl  = require("./controllers/commentsController");
// const  postCtrl  = require("./controllers/postsController");
// const  likesCtrl  = require("./controllers/likeController");


const { SERVER_PORT, DATABASE_CONFIG } = process.env;

//App instance

const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use(express.static("public"));


//entry-point for app
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

//Auth Endpoints
// app.post("/auth/register", authCtrl.register);
// app.post("/auth/login", authCtrl.login);
// app.get("/auth/logout", authCtrl.logout);
// app.get("/auth/me", authCtrl.getUser);


//Posts Endpoints
// app.get('/api/getPosts', getPosts)

//Users Endpoints
app.get("/api/users", userCtrl.getUsers);

//Comments Endpoints
// app.get("/api/comments", getComments)

//Likes Endpoints
// app.get("/api/likes", getLikes)

app.listen(SERVER_PORT, () => console.log("listening on port ${SERVER_PORT}"));
