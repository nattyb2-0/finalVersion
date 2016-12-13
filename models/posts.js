const db = require('../db/db.js');

function showAllPosts(req, res, next){
  db.any(`
    SELECT *
    FROM posts;
   `)
    .then((users) => {
      res.users = users;
      console.log(users);
      next();
    })
    .catch(error => next(error));
}


function createPost(req, res, next){

  let user = {id:1,name:"aa",password:"kine"}
  console.log(user)
  console.log(req.body)
  db.none(`
    INSERT INTO posts(user_id,title, body )
    VALUES ($1, $2, $3);`,
    [user.id, req.body.title, req.body.photo])
  .then((posts)=>{
    res.posts= posts;
    next()
  })
 .catch(error => next(error));
}

module.exports = {showAllPosts,createPost}

