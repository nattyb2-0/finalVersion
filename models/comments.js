const db = require('./db.js');

function showAllComments(req, res, next){
  console.log('inside show all comments')
  db.any(`
    SELECT *
    FROM comments;
   `)
    .then((comments) => {
       res.comments = comments;
       console.log(comments);
       next();
    })
    .catch(error => next(error));
}


function createComment (req, res, next){
  console.log(req.body)
  db.none(`
    INSERT INTO comments(postId, body, username )
    VALUES ($1, $2, $3);`,
    [post.id, req.body.body, user.username] )
  .then((comments)=>{
    res.comments= comments;
    next()
  })
 .catch(error => next(error));
}

module.exports = {showAllComments}

