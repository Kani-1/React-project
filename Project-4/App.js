/*import React,{Component} from 'react';
class App extends Component{
  render(){
    return(
      <div>
        <h1>HELLO ALL</h1>
      </div>
    );
  }
}*/

/*import React,{Component} from 'react';
class App extends Component{
  constructor(){
    super();
    this.state={fruit:"apple"};
  }
  render(){
    return(
      <div>
        <h1>I am {this.state.fruit} fruit</h1>
      </div>
    )
  }
}*/

/*import React,{Component} from 'react';
class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h1>i am {this.props.fruit}fruit</h1>
      </div>
    );
  }
}*/

/*import React,{Component} from 'react';
class App1 extends Component{
  render(){
    return(
      <div>
        <h1>i am fruit</h1>
      </div>
    );
  }
}

class App2 extends Component{
    render(){
      return(
        <div>
          <h1>WHO AM I?</h1>
          <App1/>
        </div>
      );
    }

  }*/

/*import React,{Component} from 'react';
class App extends Component{
  constructor(){
    super();
    this.state={
      fruit:"apple",
      color:"red",
      country:"washington"};
  }
  render(){
    return(
      <div>
        <h1>I am {this.state.fruit} fruit and my color is {this.state.color} color and I am from {this.state.country}</h1>
      </div>
    )
  }
}*/

/*import React,{Component} from 'react';
class App extends React.Component{
  render(){
    return(
      <div>
        <First/>
        <Second/>
      </div>
    );
  }
}

class First extends React.Component{
  render(){
    return(
      <div>
        <h1>I AM FRUIT</h1>
      </div>
    );
  }
}
class Second extends React.Component{
  render(){
    return(
      <div>
        <h1>I am Delicious</h1>
        <h1>We are talking about mangoes</h1>
      </div>
    );
  }
}*/

import { render } from '@testing-library/react';
import React,{Component} from 'react';
import styles from './demo.module.css';
import "./style.css";
import panda1 from './image/panda1.webp';
import panda2 from './image/panda2.jpg';
import panda3 from './image/panda3.jpg';
import panda4 from './image/panda4.jpg';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      data:
      [
        {
          "name":"Kavya :"
        },
        {
          "name":"Akchaya "
        },
        {
          "name":"Manushri "
        },
        {
          "name":"Kanishka "
        }
      ]
    }
  }
  render(){
    return(
      <div>
        <Fruits/>
        <ul>
          {this.state.data.map((item)=> <List data={item} />)}
        </ul>
      </div>
    );
 }
}

class Fruits extends React.Component{
  render(){
    const mystyle={
      color:'red',
      fontFamily:'cursive'
    };
    const ima={
      padding:'10px 30px 0px 10px'
    }
    const ima1={
      padding:'10px 0px 0px 500px'
    }
    const vi={
      padding:'0px 20px 0px 420px '
    }
    return(
      <div>
        <h1 style={{color:'purple',fontFamily:'revert-layer',textAlign:'center'}}><b>Welcome To Buddy Club</b></h1>
        <h2 style={mystyle}>Its about my friends</h2>
        <h3 className='App'><b>HELLO</b></h3>
        <h4 className={styles.heading}><b>All</b></h4>
        <img src={panda1} width="350px" height="250px" style={ima}></img>
        <img src={panda2} width="350px" height="250px" align="top"style={ima1}></img>
        <video width="400" height="350" style={vi} controls loop>
          <source src="./video/vpanda.mp4" type="video/mp4"></source>
        </video>

        <h1 style={vi}>play the video</h1>
        <img src={panda3} width="350px" height="250px" style={ima}></img>
        <img src={panda4} width="350px" height="250px" style={ima1}></img>
        
      </div>
    );
  }
}

class List extends React.Component{
  render(){
    return(
      <ul>
        <li style={{color:'green',fontFamily:'inherit'}}><b>{this.props.data.name}</b></li>
      </ul>

    );
  }
}
export default App;














/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/


