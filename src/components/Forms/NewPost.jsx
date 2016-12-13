import React, {Component} from 'react';

export default class NewPost extends Component {

createPost(event){
  event.preventDefault();
  console.log('inside of create post');
  let user = {id:1,name:"aa",password:"kine"}
const post ={
    user_id: user.id,
    username: user.name,
    title: this.title.value,
    photo: this.pic.value

}
this.props.addPost(post)
console.log(post);
}

render(){
  return(
    <form ref={(input)=>this.form = input} action="" className="" onSubmit={(e)=>this.createPost(e)}>
        <textarea ref={(input)=>{this.title = input}} name="" maxLength="30" className="title"></textarea>
        <input ref={(input)=>{this.pic = input}} type="file" accept="image/*"/>
        <button>create new post </button>
    </form>
    )
}
}
