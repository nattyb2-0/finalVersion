import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing/Landing.jsx'
import NewBoard from './components/Forms/NewBoard.jsx'
import Post from './components/Post/Post.jsx';
import NewPost from './components/Forms/NewPost.jsx';
import Signup  from './components/Forms/Signup.jsx'
class App extends Component {
  constructor(){
    super();
    this.addBoard = this.addBoard.bind(this);
    this.state={
      boards: [],
      posts: [],
      user: []
    }
  }
getAllBOARDS(){
  console.log('inside of getAllBoards APPjsx ')
  fetch('/boards')
  //data is returned in the form of json
    .then(data => data.json())
    .then(data => {
      // console.log(data);
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
    //update state
    // const boards = {this.state.boards};
    //add new board
console.log('this is inside set state', board)
    //set state
    let allBoards = this.state.boards;
    allBoards.push(board);
    this.setState({boards:allBoards});
    console.log('lets see the state',this.state.boards);
  //   fetch('http://localhost:3000/boards')
  // //data is returned in the form of json
  //   .then(data => data.json())

  //     // console.log(data);
  //     // the state of the qu
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
    //set state
    // let allUsers = this.state.users;
    // allUsers.push(user);
    // this.setState({users:allUsers});
    // console.log('lets see the state',this.state.users);
  //   fetch('http://localhost:3000/boards')
  // //data is returned in the form of json
  //   .then(data => data.json())

  //     // console.log(data);
  //     // the state of the qu
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
  //   fetch('http://localhost:3000/boards')
  // //data is returned in the form of json
  //   .then(data => data.json())

  //     // console.log(data);
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

        <Landing name='natty'/>
        <Signup addUser={this.addUser}/>
        <NewBoard addBoard={this.addBoard}/>
        <Post />
        <NewPost addPost={this.addPost}/>

      </div>
    );
  }
}

export default App;
