const express = require('express');
const logger  = require('morgan');
const path    = require('path');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.argv[2] || process.env.PORT || 3000;

app.listen(PORT, ()=>{
  console.log('server is running on', PORT)
})

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
// const userRouter = require('./routes/user');

const {showAllUsers, createNewUser} = require('./models/users.js');
const {showAllBoards, createBoard} = require('./models/boards.js');
const {showAllPosts, createPost} = require('./models/posts.js');
const userRoute = require('./routes/user.js')
app.get('/', userRoute);
app.get('/users', showAllUsers,  (req,res) =>{
  res.json(res.users|| []);
});
app.post('/users', createNewUser , (req,res) =>{
  res.send('you have successfully posted');
});

app.get('/boards', showAllBoards,  (req,res) =>{
  res.json(res.users|| []);
});
app.post('/boards', createBoard, (req,res)=>{
  res.send('you have successfully posted');
})


app.showAllPosts
app.get('/posts', showAllPosts,  (req,res) =>{
  res.json(res.users|| []);
});

app.post('/posts', createPost, (req,res) =>{
  res.send('you have successfully posted')
})

const authRoute = require('./routes/auth');
app.get('/auth',authRoute);
