import React, { Component } from 'react';
import './Post.css';

export default class Post extends Component {
  render(){
    return(
        <div className="post">
          <header className="pheader">
            <div className="flexCol">
            <img className="profilepic" src='http://images.clipartpanda.com/prisoner-clipart-prisoner.png'/>
            <h3>natty</h3>
            </div>
            <img src="https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Push-Pin--Right-Pink.png" alt="" className="pin"/>
            <h1 className="headerName">This shit is awesome in react</h1>
          </header>
          <main className="postBody">
            <section className="postpicSec">
              <img src='http://images.clipartpanda.com/prisoner-clipart-prisoner.png' alt="" className="postpic"/>
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
      )
  }
}
