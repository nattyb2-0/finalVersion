import React, {Component} from 'react';

export default class Signup extends Component {
    createUser(event){
      event.preventDefault();
      console.log('bout to create a user test')
      //take info from inputs
      console.log(this.username.value);
      console.log(this.email.value);
      console.log(this.password.value);
      //put in db
      //redirect user to login page
      const user={
        username: this.username.value,
        email:this.email.value,
        password:this.password.value
      }
      this.props.addUser(user)
      console.log(user);
    }
    renderInmate(){
      console.log('rendering bitch')
    }
    searchForInmate(){
      // console.log('it works');
      // const nexw = document.getElementById('new');
      // console.log(nexw);

    fetch('/inmates')
    .then(data => data.json())
    .then( (data)=>{
      console.log('bout to render this bitch')
      console.log(data)
      const nexw = document.getElementById('new');
      // data.forEach((inmate)=>{
        for(var i=0; i<data.length; i++){
        let p = document.createElement('p');
        p.innerHTML=data[i].inmatename;
        nexw.appendChild(p);
        console.log('this is inmate name',data[i].inmatename);
        console.log('this is p',p);
        console.log(nexw);
      }
    })
}

  render(){
    return(
      <div className="signup">
        <h1>SIGN UP </h1>
        <input required type="text" className="userName" required placeholder="First Name, Last Name" ref={(input)=>{this.username=input}} />
        <input required type="email" className="email" required placeholder="something@something.com" ref={(input)=>{this.email=input}} />
        <input required type="password" className="password" required placeholder="password" ref={(input)=>{this.password=input}} />
        <button className="submit" onClick={this.createUser.bind(this)}>Sign UP NOw</button>
        <div>
        <h2>Search for inmate by jail</h2>
        <select ref={(input)=>{this. institution = input}}>
           <option value="Northern State Prison">Northern State Prison</option>
           <option value="East Jersy State Prison">East Jersy State Prison</option>
           <option value="New Jersy State Prison">New Jersy State Prison</option>
           <option value="Albert C. Wagner Youth Correctional">Albert C. Wagner Youth Correctional</option>
       </select>
       <button onClick={(e)=>this.searchForInmate(e)}>Search Now</button>
        <div id="new"></div>
        </div>
      </div>


      )
  }
}
