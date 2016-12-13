import React, {Component} from 'react';
import About from '../About/About.jsx';
import Header from '../Header/Header.jsx'

export default class Landing extends Component {
  render(){
    return(
        <div>
        <p>{this.props.name}</p>
        <Header />
        <About />
        </div>
      )
  }
}
