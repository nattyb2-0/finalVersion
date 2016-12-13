import React, {Component} from 'react';


export default class CommentsContainer extends Component {
  render(){
    return(
        <div>
          <h1>container for comments</h1>
        </div>
      )
  }
}

// import React, {Component} from 'react';
// import Comment from '../Comments/Comment.jsx'

// export default class CommentsContainer extends Component {
//   renderAllComments(){
//   return this.props.comments.map((comment, i) =>
//       <Comment
//         id={comment.postid}
//         key={i}
//         comment={comment.body}

//         />


//     )
// }
// componentWillMount(){
//   this.props.getAllComments
// }
//   render(){
//     console.log(this.props)
//     return(
//         <div className="comments">
//           {this.renderAllComments()}
//         </div>
//       );
//   }
// }

