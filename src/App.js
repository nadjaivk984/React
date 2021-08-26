
import React from 'react';
import reactDom from 'react-dom';
import './App.css';

// function App() {
//   return (
//     <div className="app">
//       <form>
//         <h2>Login</h2>
//      <input type="text" value="name" className="name" placeholder="username" />
//      <input type="text" className="password" placeholder="password" />
//      <button className="login" onClick={}>Login</button>
//      <a href="#">reset</a>
//      </form>
//     </div>
//   );
// }


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      name:"",
      password:"",
    }


   
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.alert1 = this.alert1.bind(this);
    this.clear = this.clear.bind(this);
  }
  

  handleChange(event) {
    this.setState({name: event.target.value})
     
  }

  handleChange1(event) {
    this.setState({password: event.target.value})
     
  }
  alert1(){

   alert(this.state.name + this.state.password)


  }

  clear(){
    this.setState({password: ""})
    this.setState({name: ""})

  }



  render(){
  return (
    <div className="app">
      <form>
        <h2>Login</h2>
     <input type="text" value={this.state.name}  onChange={this.handleChange} className="name" placeholder="username" />
     <input type="text" value={this.state.password} className="password" placeholder="password" onChange={this.handleChange1}  />
     <button className="login" onClick={this.alert1}>Login</button>
     <a href="#" onClick={this.clear} >reset</a>
     </form>
    </div>
  );
  }

}

export default App;
