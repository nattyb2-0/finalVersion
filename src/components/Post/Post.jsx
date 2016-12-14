import React, { Component } from 'react';
import './Post.css';
import CommentContainer from '../Comments/CommentsContainer.jsx'
import LikesContainer from '../Likes/LikesContainer.jsx'
import NewComment  from '../Forms/NewComment.jsx'
import NewLike from '../Forms/NewLike.jsx'
const Post = props => (

        <div className="post">
          <header className="pheader">
            <div className="flexCol">
            <h3>{props.username}</h3>
            </div>
            <img src="https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Push-Pin--Right-Pink.png" alt="" className="pin"/>
            <h1 className="headerName">{props.title}</h1>
          </header>
          <main className="postBody">
            <section className="postpicSec">
              <img src={props.image} alt="" className="postpic"/>
            </section>
            <hr></hr>
            <section className="comm-likes">
              <CommentContainer />
              <LikesContainer   />

            </section>
          </main>
          <hr></hr>
          <footer className="footer">
                <NewLike btnid={props.btnid}/>
             <div>
               <NewComment btnid={props.btnid}/>
             </div>
            <div className="subDel">
             <input type="text('some text')" className="delete-flag"/>

            </div>
           </footer>
        </div>
      );

export default Post;


// const Post = props => (

//         <div className="post">
//           <header className="pheader">
//             <div className="flexCol">
//             <h3>{props.username}</h3>
//             </div>
//             <img src="https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Push-Pin--Right-Pink.png" alt="" className="pin"/>
//             <h1 className="headerName">{props.title}</h1>
//           </header>
//           <main className="postBody">
//             <section className="postpicSec">
//               <img src={props.image} alt="" className="postpic"/>
//             </section>
//             <hr></hr>
//             <section className="comm-likes">
//               <CommentContainer />
//               <LikesContainer   />

//             </section>
//           </main>
//           <hr></hr>
//           <footer className="footer">
//             <NewLike btnid={props.btnid}/>
//             <div>
//               <NewComment btnid={props.btnid}/>
//             </div>
//             <div className="subDel">
//             <input type="text('some text')" className="delete-flag"/>

//             </div>
//           </footer>
//         </div>
//       );

// export default Post;



