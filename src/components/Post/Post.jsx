import React, { Component } from 'react';
import './Post.css';

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
              <article className="comments">
              </article>
              <article className="likes">
              </article>
            </section>
          </main>
          <hr></hr>
          <footer className="footer">
            <img src='http://images.clipartpanda.com/prisoner-clipart-prisoner.png' alt="" className="likePhoto"/>
            <div>
            <textarea maxLength="120" className="commentText"/>
            <button className="subComment">post comment</button>
            </div>
            <div className="subDel">
            <input type="text('some text')" className="delete-flag"/>
            </div>
          </footer>
        </div>
      );

export default Post;

