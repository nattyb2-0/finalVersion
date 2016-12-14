import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing/Landing.jsx'
import NewBoard from './components/Forms/NewBoard.jsx'
import Post from './components/Post/Post.jsx';
import NewPost from './components/Forms/NewPost.jsx';
import Signup  from './components/Forms/Signup.jsx';
import Board from './components/Board/Board.jsx'


class App extends Component {
  constructor(){
    super();
    this.addBoard = this.addBoard.bind(this);
    this.state={
      boards: [],
      posts: [],
      user: [],
      comment: [],
    }
  }

componentDidMount() {
  this.getAllPosts();
}

  getAllPosts() {
      console.log('inside get all posts')
      fetch(`/posts`)
      .then(r => r.json())
      .then((data) => {
        this.setState({
          posts: data
          })
        })
      .catch(err => console.log(err))
    }

getAllBoards(){
console.log('inside of getAllBoards APPjsx ')
  fetch('/boards')
  //data is returned in the form of json
    .then(data => data.json())
    .then(data => {
       console.log(data);
       console.log('inside fetch')
      // the state of the question array is updated and passed the value thats held in the
      // data object
      // console.log('this inside of getAllQuestions: ', this);
      this.setState({
        boards: data
      });
      // console.log('the true values of state --> ', this.state);
    })
     // .then(this.getAllQuestions())
    .catch(err => console.log(err));
}




  addBoard(board){
    //add new board
console.log('this is inside set state', board)
    //set state
    let allBoards = this.state.boards;
    allBoards.push(board);
    this.setState({boards:allBoards});
    console.log('lets see the state',this.state.boards);

    fetch('/boards', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(board)
  })
  .catch(err => console.log(err));
  }


  addUser(user){

    fetch('/users', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(user)
  })
  .catch(err => console.log(err));
  }

  addPost(post){
    // let allPosts = this.state.posts;
    // allPosts.push(post);
    // this.setState({posts:allPosts});
    // console.log('lets see the state',this.state.posts);
  //     // the state of the qu
    fetch('/posts', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(post)

  })
  .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="App">
        <Landing />
        <div className="flexR">
          <div className="divideSidel">
            <div className="flexC">
              <Signup addUser={this.addUser}/>
            </div>
          </div>
          <div className="mainSide">
           <Board  getAllPosts={this.getAllPosts.bind(this)} posts={this.state.posts}  />
          </div>
          <div className="divideSideR">
            <div className="flexC">
            <NewBoard addBoard={this.addBoard}/>
            <NewPost addPost={this.addPost}/>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default App;

import React from 'react';

const Comment = props =>{
  return (
    <div className="comment">
      <p>{props.data.title}</p>
      <p>{props.data.body}</p>
    </div>
  );
}

export default Comment;
