const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

// const {getPosts, addPost, deletePost} = require('./controller')

// app.get('/getPosts', getPosts)

// app.post('/addPost', addPost)

// app.delete('/deletePost/:id', deletePost)


app.listen(4000,()=> console.log('listening on port 4000'))