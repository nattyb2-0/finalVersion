import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {render} from 'react-dom'
// import Profile from "./Components/Profile/Profile.jsx"
// import Signup from "./Components/Signup/Signup.jsx"
// import TTT from "./components/Signup/TTT.jsx"
import Landing from "./components/Landing/Landing.jsx"
import Signup from "./components/Forms/Signup.jsx"


const Root = ()=>{
  return(
    <BrowserRouter>
    <div>
      <Match exactly pattern='/' component={App}></Match>
      <Match exactly pattern='/landing' component={Landing}></Match>
      <Match exactly pattern='/signup'   component={Signup}></Match>
      </div>
    </BrowserRouter>
    )
}

Signup.contextTypes = {
  router: React.PropTypes.object
}

render(<App/>, document.querySelector('#root-container'));
